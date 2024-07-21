const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());

async function handleSearchProducts(req, res) {
  const { priceLimits, currency, itemToSearch, sitesToSearch } = req.body;

  const { highPrice, lowPrice } = priceLimits;

  let retries = 0;
  let maxRetries = 1;

  let commulativeProds = [];

  let error = "Could not get Products from: ";

  if (sitesToSearch.includes("AMAZON")) {
    console.log("Searching Amazon");
    retries = 0;

    let productsData = await retrierFunc(retries, maxRetries, searchAmazon);

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

    let productsData = await retrierFunc(retries, maxRetries, searchAliExpress);

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
  console.log(error);
  res.json({ message: "Got it!", commulativeProds });
}

async function retrierFunc(retries, maxRetries, searchSiteFunc) {
  let productsData = null;
  try {
    productsData = await searchSiteFunc();
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

async function searchAmazon() {
  let browser = null;
  let page = null;

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

async function searchAliExpress() {
  let browser = null;
  let page = null;

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
