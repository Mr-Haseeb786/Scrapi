const { connect } = require("mongoose");
const { UserModel } = require("../Models/User");
const { favProductsModel } = require("../Models/FavouriteProducts");

async function connectToDB(url) {
  return await connect(url);
}

async function insertUser(user) {
  const { username, email, passwordHash } = user;

  const newUser = await UserModel.create({
    username,
    email,
    passwordHash,
  });

  return newUser;
}

async function getUserByEmail(email) {
  const user = await UserModel.findOne({
    email,
  });
  return user;
}

async function addFavourites(userId, prodInfo) {
  const {
    title,
    imgLink,
    price,
    linkToProduct,
    producOriginSite,
    reviews,
    ratings,
  } = prodInfo;

  const favProd = await favProductsModel.create({
    title,
    imgLink,
    price,
    linkToProduct,
    producOriginSite,
    reviews,
    ratings,
    favouritedBy: userId,
  });

  return favProd;
}
async function getUserFavourites(userId) {
  const favProducts = await favProductsModel.find({
    favouritedBy: userId,
  });

  return favProducts;
}
module.exports = {
  connectToDB,
  insertUser,
  getUserByEmail,
  addFavourites,
  getUserFavourites,
};
