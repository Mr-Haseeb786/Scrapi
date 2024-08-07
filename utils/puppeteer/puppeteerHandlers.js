const { executablePath } = require("puppeteer");
const puppeteer = require("puppeteer-extra");
const { v4: uuidv4 } = require("uuid");

const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

async function startScrapping(itemToSearch, sitesToSearch) {
  console.log("Started");

  let errorMsg = "Could not get Products from: ";

  const browser = await puppeteer.launch({
    headless: true,
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    userDataDir:
      "C:/Users/Muhammad Haseeb/AppData/Local/Google/Chrome/User Data/Profile 3",
  });

  let allProducts = [];
  let num = 0;

  // Searching Amazon

  if (sitesToSearch.includes("AMAZON")) {
    console.log("Searching Amazon");

    try {
      const productsData = await searchAmazon(itemToSearch, browser);
      if (productsData && Array.isArray(productsData)) {
        productsData.map((prod) => {
          allProducts.push(prod);
        });
      }
    } catch (error) {
      console.log("Got an error: ", error);
      errorMsg = errorMsg.concat("Amazon ");
    }
  }

  // searching AliExpress

  if (sitesToSearch.includes("ALIEXPRESS")) {
    console.log("Searching Ali Express");

    try {
      const productsData = await searchAliExpress(itemToSearch, browser);
      num = 0;
      if (productsData && Array.isArray(productsData)) {
        console.log("prodsDta is Array");

        productsData.map((singleProduct) => {
          if (num % 3 === 0) {
            allProducts.push(singleProduct);
          } else {
            allProducts.unshift(singleProduct);
          }
          num++;
        });
      }
    } catch (error) {
      console.log(error);
      errorMsg = errorMsg.concat("AliExpress");
    }
  }

  // searching daraz

  if (sitesToSearch.includes("DARAZ")) {
    console.log("Searching Daraz");

    try {
      const productsData = await searchDaraz(itemToSearch, browser);
      num = 0;
      if (productsData && Array.isArray(productsData)) {
        console.log("prodsDta is Array");

        productsData.map((singleProduct) => {
          if (num % 5 === 0) {
            allProducts.unshift(singleProduct);
          } else {
            allProducts.push(singleProduct);
          }
          num++;
        });
      }
    } catch (error) {
      errorMsg = errorMsg.concat("Daraz");
    }
  }

  await browser.close();
  return { allProducts, errorMsg };
}

function priceToRuppee(dollarPrice) {
  return dollarPrice * 279;
}

function genUid() {
  const id = uuidv4();
  return id;
}

async function searchAmazon(searchItem, browser) {
  const { itemName, minPrice, maxPrice } = searchItem;

  console.log(minPrice, maxPrice);

  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(90000);

  await page.goto(`https://amazon.com/`, { waitUntil: "networkidle2" });

  await page.waitForSelector('input[aria-label="Search Amazon"]');

  await page.type('input[aria-label="Search Amazon"]', itemName);
  await delay(800);

  await page.click(".nav-search-submit");
  await page.waitForNavigation({ waitUntil: "load" });

  await page.waitForSelector('input[name="high-price"]');

  await page.evaluate(
    (maxPrice, minPrice) => {
      document.querySelector('input[name="high-price"]').value = `${maxPrice}`;
      document.querySelector('input[name="low-price"]').value = `${minPrice}`;
    },
    maxPrice,
    minPrice
  );

  await delay(500);
  await page.click('[aria-label="Go - Submit price range"]');

  await delay(4000);

  await page.waitForSelector(".s-card-container");
  await page.waitForSelector(".s-image");
  await page.exposeFunction("generateUid", genUid);
  const titleDivs = await page.$$(".s-card-container");

  let titleArray = [];
  let prevProdLink = "";

  for (const titleDiv of titleDivs) {
    const singleProduct = await page.evaluate(async (el) => {
      let prodPrice = null;
      let productLink = "";
      let productTitle = "";
      let prodReviews = null;
      let productImgLink = "";
      let prodRatings = null;
      let prodId = "";

      try {
        productImgLink = el.querySelector(".s-image").getAttribute("src");
      } catch (error) {
        console.log(error);
      }

      if (!productImgLink) return null;

      try {
        productLink = el
          .querySelector("div > div > span > a")
          .getAttribute("href");
      } catch (error) {
        console.log(error);
      }

      if (!productLink) return null;

      if (!productLink.startsWith("https"))
        productLink = `https://amazon.com${productLink}`;

      try {
        productTitle = el.querySelector(
          '[data-cy="title-recipe"] > h2 > a > span'
        ).textContent;
      } catch (error) {
        console.log(error);
      }

      if (!productTitle) return null;

      try {
        let prodPriceString = el.querySelector(
          '[data-cy="price-recipe"] > div > div > a > span > span'
        ).textContent;

        prodPrice = parseFloat(prodPriceString.split("$")[1]);
      } catch (error) {
        console.log(error);
      }

      if (!prodPrice) return null;

      try {
        let prodRatingsString = el.querySelector(
          '[data-cy="reviews-ratings-slot"] > span'
        ).innerHTML;

        prodRatingsString = prodRatingsString.split(" ")[0];
        prodRatings = parseFloat(prodRatingsString);
      } catch (error) {
        console.log(error);
      }

      try {
        let prodReviewsString = el
          .querySelector('[data-csa-c-slot-id="alf-reviews"] > span')
          .getAttribute("aria-label");

        prodReviewsString = prodReviewsString.split(" ")[0];
        prodReviewsString = prodReviewsString.replace(/,/g, "");
        prodReviews = parseInt(prodReviewsString);
      } catch (error) {
        console.log(error);
      }

      try {
        prodId = await generateUid();
        console.log(prodId);
      } catch (error) {
        console.log(error);
        prodId = null;
      }

      return {
        prodId,
        prodLink: productLink,
        productTitle,
        productImgLink,
        prodPrice,
        prodRatings,
        prodReviews,
        originSite: "AMAZON",
      };
    }, titleDiv);

    if (singleProduct) {
      if (prevProdLink !== singleProduct.prodLink) {
        console.log(singleProduct);
        prevProdLink = singleProduct.prodLink;
        titleArray.push(singleProduct);
      }
    }
  }

  return titleArray;
}

async function searchAliExpress(searchItem, browser) {
  let { itemName, maxPrice, minPrice } = searchItem;

  maxPrice = priceToRuppee(maxPrice);
  minPrice = priceToRuppee(minPrice);

  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(90000);

  await page.goto("https://aliexpress.com/", { waitUntil: "networkidle2" });

  // try {
  //   await page.click(".pop-close-btn");
  // } catch (error) {
  //   console.log("the modal did not open");
  // }

  await page.type("#search-words", itemName);
  await delay(500);
  await page.click(".search--submit--2VTbd-T");

  console.log("started wait for Navi");
  console.log("Waiting for selector");

  await page.waitForSelector(".price--priceContainer--3gmxuN5");
  console.log("Wait ended");

  await page.waitForSelector('input[name="minPrice"]');
  await page.waitForSelector('input[name="maxPrice"]');

  await delay(1000);

  await page.type('input[name="minPrice"]', `${minPrice}`);
  await page.type('input[name="maxPrice"]', `${maxPrice}`);

  await delay(1500);
  await page.click(".price--ok--30GSiFy");
  console.log("Ok Click");

  await delay(4000);
  await page.waitForSelector(".search-item-card-wrapper-gallery");

  const items = await page.$$(".search-item-card-wrapper-gallery");
  await page.exposeFunction("generateUid", genUid);

  let ProductsInfo = [];
  let prevProdLink = "";

  for (const item of items) {
    const singleItem = await page.evaluate(async (el) => {
      let prodId = await generateUid();
      let prodPrice = null;
      let prodLink = "";
      let productTitle = "";
      let prodReviews = null;
      let productImgLink = "";
      let salePrice = "";

      function priceToDollar(ruppeePrice) {
        const dollarPrice = ruppeePrice / 278;

        return parseFloat(dollarPrice.toFixed(2));
      }

      try {
        prodLink = el.querySelector(".search-card-item").getAttribute("href");
      } catch (error) {
        return null;
      }

      try {
        productTitle = el
          .querySelector(".images--item--3XZa6xf")
          .getAttribute("alt");
      } catch (error) {
        return null;
      }

      try {
        let priceNodes = el.querySelectorAll(
          ".multi--price-sale--U-S0jtj > span"
        );

        priceNodes.forEach((node) => {
          const style = window.getComputedStyle(node);
          const fontSize = style.getPropertyValue("font-size");
          const numSize = parseInt(fontSize.split("px")[0]);

          if (numSize === 24) {
            salePrice = salePrice.concat(node.innerHTML);
          }
        });
      } catch (error) {
        return null;
      }

      try {
        let stringProdReviews = "";
        stringProdReviews = el.querySelector(
          ".multi--trade--Ktbl2jB"
        ).textContent;

        if (stringProdReviews.includes("+")) {
          stringProdReviews = stringProdReviews.split("+")[0];
        } else {
          stringProdReviews = stringProdReviews.split(" ")[0];
        }

        prodReviews = parseInt(stringProdReviews);
      } catch (error) {
        prodReviews = null;
      }

      try {
        productImgLink = el
          .querySelector(".images--item--3XZa6xf")
          .getAttribute("src");
      } catch (error) {
        return null;
      }

      if (salePrice) {
        prodPrice = parseInt(salePrice);
        prodPrice = priceToDollar(prodPrice);
      }

      return {
        prodId,
        prodLink,
        productTitle,
        productImgLink,
        prodPrice,
        prodRatings: null,
        prodReviews,
        originSite: "ALIEXPRESS",
      };
    }, item);

    if (singleItem) {
      if (prevProdLink === singleItem.prodLink) continue;

      prevProdLink = singleItem.prodLink;

      ProductsInfo.push(singleItem);
    }
  }
  return ProductsInfo;
}

async function searchDaraz(searchItem, browser) {
  let { itemName, minPrice, maxPrice } = searchItem;

  minPrice = priceToRuppee(minPrice);
  maxPrice = priceToRuppee(maxPrice);

  console.log("Daraz", minPrice, maxPrice);

  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(30000);

  await page.goto(`https://www.daraz.pk/`, { waitUntil: "networkidle2" });

  await page.waitForSelector('input[type="search"]');

  await page.type('input[type="search"]', itemName);
  await delay(900);

  await page.click(".search-box__button--1oH7");

  try {
    await page.waitForSelector('input[placeholder="Min"]');
    await page.waitForSelector('input[placeholder="Max"]');

    await page.type('input[placeholder="Min"]', `${maxPrice}`);
    await page.type('input[placeholder="Max"]', `${minPrice}`);

    await delay(700);

    await page.waitForSelector(".ant-btn");
    const button = await page.$(".ant-btn");

    await page.click(".ant-btn");

    await delay(1500);
  } catch (error) {
    console.log(error);
  }

  await page.waitForSelector('[data-qa-locator="product-item"]');

  await delay(4000);

  const products = await page.$$('[data-qa-locator="product-item"]');

  await page.waitForSelector(".picture-wrapper");
  await page.exposeFunction("generateUid", genUid);

  let ProductsInfo = [];

  let prevProdLink = "";

  for (const product of products) {
    const singleProduct = await page.evaluate(async (el) => {
      let prodId = await generateUid();
      let prodPrice = null;
      let prodLink = "";
      let productTitle = "";
      let productImgLink = "";

      function priceToDollar(ruppeePrice) {
        const dollarPrice = ruppeePrice / 278;

        return parseFloat(dollarPrice.toFixed(2));
      }

      try {
        prodLink = el
          .querySelector('[data-qa-locator="product-item"] > a')
          .getAttribute("href");
      } catch (error) {
        console.log(error);
      }

      try {
        productImgLink = el
          .querySelector(".picture-wrapper > img")
          .getAttribute("src");
      } catch (error) {
        console.log(error);
        console.log("Did not get the img");
      }

      try {
        productTitle = el
          .querySelector(".picture-wrapper > img")
          .getAttribute("alt");
      } catch (error) {
        console.log(error);
        console.log("Did not get the title");
      }

      try {
        let prodPriceStr = el.querySelector(".ooOxS").innerHTML;
        prodPriceStr = prodPriceStr.replace(/,/g, "");

        prodPrice = parseInt(prodPriceStr);
        prodPrice = priceToDollar(prodPrice);

        console.log(prodPrice);
      } catch (error) {
        console.log(error);
        console.log("Did not get the price");
        return null;
      }

      if (!prodLink || !productImgLink || !productTitle) return null;

      return {
        prodId,
        prodLink,
        productTitle,
        productImgLink,
        prodPrice,
        prodRating: null,
        prodReviews: null,
        originSite: "DARAZ",
      };
    }, product);

    if (prevProdLink === singleProduct.prodLink) {
      continue;
    }

    prevProdLink = singleProduct.prodLink;

    if (singleProduct) ProductsInfo.push(singleProduct);
  }
  return ProductsInfo;
}

module.exports = { startScrapping };
