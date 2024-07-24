const jwt = require("jsonwebtoken");
require("dotenv").config();

function createJwtToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET);
}

function verifyToken(token) {
  if (!token) return;

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
}

module.exports = { createJwtToken, verifyToken };
