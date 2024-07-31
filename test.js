const { executablePath } = require("puppeteer");
const puppeteer = require("puppeteer-extra");

const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

console.log("Started");

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

async function startScrapping() {
  const browser = await puppeteer.launch({
    // headless: false,
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    userDataDir:
      "C:/Users/Muhammad Haseeb/AppData/Local/Google/Chrome/User Data/Profile 2",
  });
  const page = await browser.newPage();
  await page.goto(`https://amazon.com/`, { waitUntil: "networkidle2" });

  // console.log("On page waiting...");
  // await delay(1300);
  // await page.click('input[aria-label="Search Amazon"]');
  await page.type('input[aria-label="Search Amazon"]', "speakers");
  await delay(800);
  // await page.click(".search-box__button--1oH7");
  await page.click(".nav-search-submit");
  await page.waitForNavigation({ waitUntil: "networkidle2" });
  // console.log("Searched Element");
  // await delay(2000);
  // const parentElement = await page.$('[aria-label="Product"]');
  // console.log("Caught element");
  // await delay(6000);
  await page.waitForSelector(".s-card-container");
  await page.waitForSelector(".s-image");
  const titleDivs = await page.$$(".s-card-container");

  let titleArray = [];
  let prodPrice = "";
  let productTitle = "";
  let productLink = "";
  let imgLink = "";

  for (const titleDiv of titleDivs) {
    const singleProduct = await page.evaluate((el) => {
      try {
        imgLink = el.querySelector(".s-image").getAttribute("src");
      } catch (error) {}

      try {
        productLink = el
          .querySelector("div > div > span > a")
          .getAttribute("href");
      } catch (error) {}

      if (!productLink) return null;

      if (!productLink.startsWith("https"))
        productLink = `https://amazon.com${productLink}`;

      try {
        productTitle = el.querySelector(
          '[data-cy="title-recipe"] > h2 > a > span'
        ).textContent;
      } catch (error) {}

      if (!productTitle) return null;

      try {
        prodPrice = el.querySelector(
          '[data-cy="price-recipe"] > div > div > a > span > span'
        ).textContent;
      } catch (error) {}

      return { productTitle, imgLink, productLink, prodPrice };
    }, titleDiv);

    if (singleProduct) titleArray.push(singleProduct);
  }

  console.log(titleArray);

  await page.screenshot({ path: "testing-product.png" });
  console.log("Finished Scrapping");
  await browser.close();
}

async function searchWithPrice() {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    userDataDir:
      "C:/Users/Muhammad Haseeb/AppData/Local/Google/Chrome/User Data/Profile 3",
  });

  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(90000);

  await page.goto(`https://amazon.com/`, { waitUntil: "networkidle2" });

  await page.waitForSelector('input[aria-label="Search Amazon"]');

  await page.type('input[aria-label="Search Amazon"]', "speakers");
  await delay(800);

  await page.click(".nav-search-submit");
  await page.waitForNavigation({ waitUntil: "load" });

  await page.waitForSelector('input[name="high-price"]');

  await page.evaluate(() => {
    document.querySelector('input[name="high-price"]').value = 90;
    document.querySelector('input[name="low-price"]').value = 20;
  });

  await delay(500);
  await page.click('[aria-label="Go - Submit price range"]');

  await delay(1000);

  await page.waitForSelector(".s-card-container");
  await page.waitForSelector(".s-image");
  const titleDivs = await page.$$(".s-card-container");

  let titleArray = [];

  for (const titleDiv of titleDivs) {
    const singleProduct = await page.evaluate((el) => {
      let prodPrice = "";
      let productTitle = "";
      let productLink = "";
      let imgLink = "";

      try {
        imgLink = el.querySelector(".s-image").getAttribute("src");
      } catch (error) {}

      try {
        productLink = el
          .querySelector("div > div > span > a")
          .getAttribute("href");
      } catch (error) {}

      if (!productLink) return null;

      if (!productLink.startsWith("https"))
        productLink = `https://amazon.com${productLink}`;

      try {
        productTitle = el.querySelector(
          '[data-cy="title-recipe"] > h2 > a > span'
        ).textContent;
      } catch (error) {}

      if (!productTitle) return null;

      try {
        prodPrice = el.querySelector(
          '[data-cy="price-recipe"] > div > div > a > span > span'
        ).textContent;
      } catch (error) {}

      return { productTitle, imgLink, productLink, prodPrice };
    }, titleDiv);

    if (singleProduct) titleArray.push(singleProduct);
  }

  console.log(titleArray);

  // await browser.close();
}

// searchWithPrice();

async function visitAliExpress(productInfo) {
  const { prodName, maxPrice, minPrice } = productInfo;

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(90000);

  await page.goto("https://aliexpress.com/", { waitUntil: "networkidle2" });

  // try {
  //   await page.click(".pop-close-btn");
  // } catch (error) {
  //   console.log("the modal did not open");
  // }

  await page.type("#search-words", prodName);
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

  await delay(3100);
  await page.waitForSelector(".search-item-card-wrapper-gallery");

  const items = await page.$$(".search-item-card-wrapper-gallery");

  let ProductsInfo = [];

  for (const item of items) {
    const singleItem = await page.evaluate((el) => {
      let prodPrice = null;
      let prodLink = "";
      let productTitle = "";
      let prodReviews = null;
      let productImgLink = "";
      let salePrice = "";

      try {
        prodLink = el.querySelector(".search-card-item").getAttribute("href");
      } catch (error) {
        console.log("Did not get the image");
      }

      try {
        productTitle = el
          .querySelector(".images--item--3XZa6xf")
          .getAttribute("alt");
      } catch (error) {
        console.log("Did not get product title");
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
        console.log("Node error");
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
        console.log("Did not get the reviews");
        prodReviews = 0;
      }

      try {
        productImgLink = el
          .querySelector(".images--item--3XZa6xf")
          .getAttribute("src");
      } catch (error) {
        console.log("Did not get an Image");
      }

      if (salePrice) {
        prodPrice = parseInt(salePrice);
      }

      return {
        prodLink,
        productTitle,
        prodPrice,
        prodReviews,
        productImgLink,
      };
    }, item);

    ProductsInfo.push(singleItem);
  }

  console.log(ProductsInfo);

  console.log("DOne");
  console.log("Gotcha");
  return await browser.close();
}

async function visitDaraz() {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    userDataDir:
      "C:/Users/Muhammad Haseeb/AppData/Local/Google/Chrome/User Data/Profile 3",
  });

  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(90000);

  await page.goto(`https://www.daraz.pk/`, { waitUntil: "networkidle2" });

  await page.waitForSelector('input[type="search"]');

  await page.type('input[type="search"]', "speakers");
  await delay(900);

  await page.click(".search-box__button--1oH7");
  await page.waitForNavigation({ waitUntil: "networkidle2" });

  await page.waitForSelector('input[placeholder="Min"]');
  await page.waitForSelector('input[placeholder="Max"]');

  await page.type('input[placeholder="Min"]', `800`);
  await page.type('input[placeholder="Max"]', `3000`);

  await delay(700);

  await page.click(".ant-btn.filter-price__btn--F4CmC.ant-btn-primary");

  await page.waitForNavigation({ waitUntil: "networkidle2" });

  await delay(1500);

  await page.waitForSelector('[data-qa-locator="product-item"]');

  const products = await page.$$('[data-qa-locator="product-item"]');
  console.log("waiting for img");

  await page.waitForSelector("#id-img");

  let ProductsInfo = [];

  let prevProdLink = "";

  for (const product of products) {
    const singleProduct = await page.evaluate((el) => {
      let prodPrice = null;
      let prodLink = "";
      let productTitle = "";
      let prodReviews = null;
      let productImgLink = "";
      let salePrice = "";

      try {
        prodLink = el.querySelector("#id-a-link").getAttribute("href");
      } catch (error) {
        console.log(error);
      }

      try {
        productImgLink = el.querySelector(".image--Smuib").getAttribute("src");
      } catch (error) {
        console.log("Did not get the img");
      }

      try {
        productTitle = el.querySelector(".image--Smuib").getAttribute("alt");
      } catch (error) {
        console.log("Did not get the title");
      }

      try {
        prodPrice = el.querySelector(".currency--GVKjl").innerHTML;
      } catch (error) {
        console.log("Did not get the price");
      }

      return {
        prodLink,
        productImgLink,
        productTitle,
        prodPrice,
        prodReviews: null,
      };
    }, product);

    if (prevProdLink === singleProduct.prodLink) {
      continue;
    }

    prevProdLink = singleProduct.prodLink;
    ProductsInfo.push(singleProduct);
  }

  console.log(ProductsInfo);
}

const productInfo = {
  prodName: "Flashlight",
  minPrice: 500,
  maxPrice: 2000,
};

visitDaraz();

// visitAliExpress(productInfo);

// searchWithPrice();
