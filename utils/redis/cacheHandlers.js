const { redisClient } = require("./connectToRedis");

async function setInCache(productName, sites, searchedProductsArray) {
  try {
    await redisClient.json.set(
      `products:${sites}:${productName}`,
      "$",
      searchedProductsArray
    );

    await redisClient.expire(`products:${productName}`, 90);
  } catch (error) {
    console.log(error);
  }
}

async function getFromCache(productName, sites) {
  try {
    const results = await redisClient.json.get(
      `products:${sites}:${productName}`,
      "$"
    );

    if (!results) return null;

    return results;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { setInCache, getFromCache };
