const bcrypt = require("bcryptjs");
const { createJwtToken, verifyToken } = require("./utils/jwtAuth");

function hashPass() {
  const token = createJwtToken({ username: "Bawa", pass: "Qadra" });
  console.log(token);

  const res = verifyToken(token);
  console.log(res);
}

hashPass();
