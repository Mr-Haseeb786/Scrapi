const { Router } = require("express");
const { userReqBodyCheck } = require("../Middlewares/reqBodyChecking");
const {
  handleRegistNewUser,
  handleUserSignIn,
  handleGetUserFavourites,
  handleSetUserFavourites,
  handleUserValidation,
  handleUserSignOut,
} = require("../Controllers/user");

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Working" });
});

router.get("/validation", handleUserValidation);
router.post("/signin", handleUserSignIn);
router.get("/signout", handleUserSignOut);

router.get("/favourites", handleGetUserFavourites);
router.post("/favourites", handleSetUserFavourites);

router.use("/", userReqBodyCheck);
router.post("/", handleRegistNewUser);

module.exports = router;
