const express = require("express");
const prodSearchRouter = require("./Routes/products");
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.use("/api/v1/products", prodSearchRouter);

app.get("/api", (req, res) => {
  console.log(req.body);
  res.json({ msg: "Everything Working" });
});

app.listen(process.env.PORT, () =>
  console.log(`Listening on Port ${process.env.PORT}`)
);
