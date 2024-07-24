const express = require("express");
const prodSearchRouter = require("./Routes/products");
const userRouter = require("./Routes/user");
const { connectToDB } = require("./utils/dbHandlers");
const cookieParser = require("cookie-parser");
require("dotenv").config();

connectToDB(process.env.DB_URL)
  .then(() => console.log("Connection Successful!"))
  .catch(() => console.log("Failed to connect to Db"));

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/products", prodSearchRouter);
app.use("/api/v1/user", userRouter);

app.get("/api", (req, res) => {
  console.log(req.body);
  res.json({ msg: "Everything Working" });
  // req.cookies()
});

app.listen(process.env.PORT, () =>
  console.log(`Listening on Port ${process.env.PORT}`)
);
