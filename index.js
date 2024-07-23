const express = require("express");
const prodSearchRouter = require("./Routes/products");
const {
  connectToDB,
  insertUser,
  getUserByName,
  addFavourites,
} = require("./utils/dbHandlers");
require("dotenv").config();

connectToDB(process.env.DB_URL)
  .then(() => console.log("Connection Successful!"))
  .catch(() => console.log("Failed to connect to Db"));

const app = express();

// const user = {
//   userName: "Bawa",
//   email: "@gmail",
//   passwordHash: "THA",
//   salt: "DHA",
// };

// const prodInfo = {
//   title: "doodh",
//   imgLink: "google",
//   price: 200,
//   linkToProduct: "amazon",
//   producOriginSite: "alibaba",
//   reviews: 300,
//   ratings: 900,
// };

// insertUser(user);
// getUserByName("Bawa");

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
