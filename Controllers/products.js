const { getFromCache, setInCache } = require("../utils/redis/cacheHandlers");
const { startScrapping } = require("../utils/puppeteer/puppeteerHandlers");

async function handleSearchProducts(req, res) {
  const { priceLimits, currency, itemToSearch, sitesToSearch } = req.body;

  const { highPrice, lowPrice } = priceLimits;

  const searchItem = {
    itemName: itemToSearch,
    minPrice: highPrice,
    maxPrice: lowPrice,
  };

  // Getting from Cache
  let sites = "";

  sitesToSearch.forEach((e) => {
    sites = sites.concat(e);
  });

  console.log(sites);

  // const productList = await getFromCache(itemToSearch.toLowerCase(), sites);

  // if (productList) {
  //   return res.json({ products: productList });
  // }

  const { allProducts, error } = await startScrapping(
    searchItem,
    sitesToSearch
  );

  // setting in cache

  // if (allProducts.length !== 0) {
  //   setInCache(itemToSearch.toLowerCase(), sites, allProducts);
  // }

  console.log(error);
  res.json({ message: "Got it!", products: allProducts });
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

async function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

module.exports = { handleSearchProducts };
