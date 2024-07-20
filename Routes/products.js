const { Router } = require("express");
const { handleSearchProducts } = require("../Controllers/products");
const { reqBodyCheck } = require("../Middlewares/reqBodyChecking");

const router = Router();

router.get("/", (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:5173");
  res.json({ msg: "A gya bhai" });
});

router.use("/search-products", reqBodyCheck);

router.post("/search-products", handleSearchProducts);

module.exports = router;
