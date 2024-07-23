const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  salt: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
});

const UserModel = model("users", UserSchema);

module.exports = { UserModel };
