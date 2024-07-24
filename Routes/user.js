const { Router } = require("express");
const { userReqBodyCheck } = require("../Middlewares/reqBodyChecking");
const {
  handleRegistNewUser,
  handleUserSignIn,
} = require("../Controllers/user");

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Working" });
});

router.post("/signin", handleUserSignIn);
router.use("/", userReqBodyCheck);
router.post("/", handleRegistNewUser);

module.exports = router;
