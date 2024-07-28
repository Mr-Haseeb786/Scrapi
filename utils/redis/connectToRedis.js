const { createClient } = require("redis");

const redisClient = createClient();
async function connectToRedis() {
  try {
    await redisClient.connect();
    console.log("Connected to Redis Client");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connectToRedis, redisClient };
