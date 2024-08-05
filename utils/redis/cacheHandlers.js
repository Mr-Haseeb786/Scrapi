const { redisClient } = require("./connectToRedis");

async function setInCache(productName, sites, searchedProductsArray) {
  try {
    await redisClient.json.set(
      `products:${sites}:${productName}`,
      "$",
      searchedProductsArray
    );

    await redisClient.expire(`products:${sites}:${productName}`, 300);
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
    return null;
  }
}

module.exports = { setInCache, getFromCache };
