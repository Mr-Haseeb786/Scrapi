const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const { getFromCache, setInCache } = require("../utils/redis/cacheHandlers");

puppeteer.use(StealthPlugin());

async function handleSearchProducts(req, res) {
  const { priceLimits, currency, itemToSearch, sitesToSearch } = req.body;

  const { highPrice, lowPrice } = priceLimits;

  let retries = 0;
  let maxRetries = 1;

  let commulativeProds = [];

  const productInfo = {
    highPrice,
    lowPrice,
    itemToSearch,
  };

  // Getting from Cache
  let sites = "";

  sitesToSearch.forEach((e) => {
    sites = sites.concat(e);
  });

  console.log(sites);

  const productList = await getFromCache(itemToSearch.toLowerCase(), sites);

  if (productList) {
    productList.forEach((e) => {
      commulativeProds.push(e);
    });
    return res.json({ commulativeProds });
  }

  console.log("Delaying");
  await delay(2000);
  console.log("Delay Ending");

  let error = "Could not get Products from: ";

  if (sitesToSearch.includes("AMAZON")) {
    console.log("Searching Amazon");
    retries = 0;

    let productsData = await retrierFunc(
      retries,
      maxRetries,
      searchAmazon,
      productInfo
    );

    if (productsData && Array.isArray(productsData)) {
      productsData.map((prod) => {
        commulativeProds.push(prod);
      });
    }

    if (!productsData) {
      error = error.concat("Amazon ");
    }
  }

  if (sitesToSearch.includes("ALIEXPRESS")) {
    retries = 0;

    console.log("Searching Ali Express");

    let productsData = await retrierFunc(
      retries,
      maxRetries,
      searchAliExpress,
      productInfo
    );

    // console.log(productsData);

    if (productsData && Array.isArray(productsData)) {
      console.log("prodsDta is Array");

      productsData.map((singleProduct) => {
        commulativeProds.push(singleProduct);
      });
    }

    if (!productsData) {
      error = error.concat("AliExpress");
    }
  }

  if (commulativeProds.length !== 0) {
    setInCache(itemToSearch.toLowerCase(), sites, commulativeProds);
  }

  console.log(error);
  res.json({ message: "Got it!", commulativeProds });
}

// Function to retry incase of error

async function retrierFunc(retries, maxRetries, searchSiteFunc, productInfo) {
  let productsData = null;
  try {
    productsData = await searchSiteFunc(productInfo);
    return productsData;
  } catch (error) {
    if (retries < maxRetries) {
      retries++;
      console.log("Error Occured Retrying: " + retries);
      delay(600);
      retrierFunc(retries, maxRetries, searchSiteFunc);
      return;
    }
    return (productsData = null);
  }
}

// individual Searching Functions

async function searchAmazon(productInfo) {
  let browser = null;
  let page = null;

  const { maxPrice, minPrice, productName } = productInfo;

  throw new Error("There was an error");

  let productsData = [
    {
      id: 2,
      name: "prod 1",
      price: 987,
    },
  ];

  return productsData;

  try {
    browser = await puppeteer.launch({
      headless: true,
    });
  } catch (error) {
    throw new Error("There was an error try again");
  }

  try {
    page = await browser.newPage();
  } catch (error) {
    await browser.close();
    throw new Error("There was an error opening the page");
  }

  try {
    await page.goto("https://whatismyipaddress.com/", {
      waitUntil: "networkidle2",
    });
  } catch (error) {
    await browser.close();
    throw new Error("There was an error navigating to Amazon");
  }

  await page.screenshot({ path: "ali.png" });
  await browser.close();
}

async function searchAliExpress(productInfo) {
  let browser = null;
  let page = null;

  const { maxPrice, minPrice, productName } = productInfo;

  // throw new Error("There was an error please try again ");
  let productsData = [
    {
      id: 1,
      name: "prod 4",
      price: 200,
    },
  ];

  return productsData;
}

async function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

module.exports = { handleSearchProducts };
