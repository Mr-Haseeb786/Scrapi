const bcrypt = require("bcryptjs");
const {
  insertUser,
  getUserByEmail,
  addFavourites,
  getUserFavourites,
} = require("../utils/dbHandlers");
const { createJwtToken, verifyToken } = require("../utils/jwtAuth");

let testing = 0;

function handleUserValidation(req, res) {
  const token = req.cookies.token;

  if (!token)
    return res.status(401).json({ error: "user not logged in", user: null });

  const user = verifyToken(token);

  testing++;

  console.log(testing);
  return res.json({ user });
}

async function handleRegistNewUser(req, res) {
  const { username, password, email } = req.body;

  console.log(password);
  const passwordHash = await bcrypt.hash(password, 12);
  console.log(passwordHash);

  const user = {
    username,
    email,
    passwordHash,
  };

  try {
    const emailExists = await getUserByEmail(email);

    if (emailExists)
      return res.status(400).json({ error: "Email Already exists" });
  } catch (error) {
    console.log("An error occured ", error);
    return res
      .status(500)
      .json({ error: "An Error Occurred Please try later" });
  }

  try {
    const newUser = await insertUser(user);
    return res.status(201).json({
      message: "New User Registered Successfully",
      userId: newUser._id,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error Registering the user" });
  }
}

async function handleUserSignIn(req, res) {
  const { email, password, signedInWithGoogle } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: "No Email or Password Provided" });

  try {
    const user = await getUserByEmail(email);
    if (!user)
      return res.status(401).json({ error: "This email is not registered" });

    const passwordMatched = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatched)
      return res.status(401).json({ error: "Incorrect Password" });

    const userInfo = {
      userId: user._id,
      username: user.username,
      email: user.email,
      signedInWithGoogle,
    };

    const token = createJwtToken(userInfo);
    res.cookie("token", token);

    return res.json({ message: "User LoggedIn ", userInfo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error searching for User" });
  }
}

async function handleUserSignOut(req, res) {
  const token = req.cookies;

  if (!token) return res.status(401).json({ error: "User not logged in" });

  return res.clearCookie("token").json({ message: "Cookies cleared" });
}

async function handleGetUserFavourites(req, res) {
  if (!req.body) return res.json({ error: "No Body" });

  const token = req.cookies.token;

  if (!token)
    return res.status(401).json({
      error: "You need to be Logged In to view your favourite products",
    });

  let user = null;
  try {
    user = verifyToken(token);
  } catch (error) {
    console.log("Invalid Token");
    res.status(401).json({ error: "Please Log in" });
  }

  try {
    const favProducts = await getUserFavourites(user.userId);

    return res.status(200).json({ favProducts });
  } catch (error) {
    console.log("There was an error ", error);
  }
}

async function handleSetUserFavourites(req, res) {
  const {
    productTitle,
    productImgLink,
    prodPrice,
    prodLink,
    originSite,
    prodReviews,
    prodRatings,
  } = req.body;

  console.log("Request Body", req.body);

  if (
    !productTitle ||
    !productImgLink ||
    !prodPrice ||
    !prodLink ||
    !originSite
  ) {
    return res.status(400).json({ error: "Product Details are missing" });
  }

  let userDetails = null;

  const { token } = req.cookies;

  if (!token) return res.status(401).json({ error: "User not logged in" });

  try {
    userDetails = verifyToken(token);
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      error:
        "Your Cookies have been cleared or altered. You need to login again to set Your Favourites",
    });
  }

  try {
    const favProduct = await addFavourites(userDetails.userId, req.body);

    return res
      .status(201)
      .json({ message: "Added to Favourites", favProduct: favProduct._id });
  } catch (error) {
    console.log(error);
    res.json({ error: "There was an error inserting in db" });
  }
}

module.exports = {
  handleRegistNewUser,
  handleUserSignIn,
  handleGetUserFavourites,
  handleSetUserFavourites,
  handleUserValidation,
  handleUserSignOut,
};
