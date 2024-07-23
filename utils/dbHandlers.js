const { connect } = require("mongoose");
const { UserModel } = require("../Models/User");
const { favProductsModel } = require("../Models/FavouriteProducts");

async function connectToDB(url) {
  return await connect(url);
}

async function insertUser(user) {
  const { userName, email, salt, passwordHash } = user;

  try {
    const newUser = await UserModel.create({
      userName,
      email,
      salt,
      passwordHash,
    });

    console.log("Insetion Successful");
    console.log(newUser);
  } catch (error) {
    console.log("Error Inserting in Database ", error);
  }
  return;
}

async function getUserByName(userName) {
  const user = await UserModel.findOne({
    userName,
  });

  console.log(user);

  return;
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

module.exports = { connectToDB, insertUser, getUserByName, addFavourites };
