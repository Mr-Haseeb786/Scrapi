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

  try {
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

    console.log(favProd);
  } catch (error) {
    console.log("Error faving a product");
  }
}

module.exports = { connectToDB, insertUser, getUserByEmail, addFavourites };
