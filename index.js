const express = require("express");

const prodSearchRouter = require("./Routes/products");
const userRouter = require("./Routes/user");
const validationRouter = require("./Routes/validation");

const { connectToDB } = require("./utils/dbHandlers");
const cookieParser = require("cookie-parser");
const { connectToRedis } = require("./utils/redis/connectToRedis");

require("dotenv").config();

connectToDB(process.env.DB_URL)
  .then(() => console.log("Connection to DB Successful!"))
  .catch(() => console.log("Failed to connect to Db"));

connectToRedis();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/products", prodSearchRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/validation", validationRouter);

app.get("/api", (req, res) => {
  console.log(req.body);
  res.json({ msg: "Everything Working" });
});

app.listen(process.env.PORT, () =>
  console.log(`Listening on Port ${process.env.PORT}`)
);
