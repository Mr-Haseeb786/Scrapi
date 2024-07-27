const { Router } = require("express");
const { handleUserValidation } = require("../Controllers/user");

const router = Router();

router.get("/", handleUserValidation);
router.get("/test", (req, res) => {
  return res.end("Working");
});

module.exports = router;
