const bcrypt = require("bcryptjs");
const { insertUser, getUserByEmail } = require("../utils/dbHandlers");

async function handleRegistNewUser(req, res) {
  const { username, password, email } = req.body;

  console.log(password);
  const passwordHash = await bcrypt.hash(password, 12);
  console.log(passwordHash);

  const user = {
    username,
    email,
    passwordHash,
  };

  try {
    const newUser = await insertUser(user);
    return res.json({
      message: "New User Registered Successfully",
      userId: newUser._id,
    });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Error Registering the user" });
  }
}

async function handleUserSignIn(req, res) {
  const { email, password } = req.body;

  if (!email || !password)
    return res.json({ message: "No Email or Password Provided" });

  try {
    const user = await getUserByEmail(email);
    if (!user) return res.json({ message: "User Email Does not Exist" });

    const passwordMatched = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatched) return res.json({ message: "Incorrect Password" });

    const userInfo = {
      userId: user._id,
      username: user.username,
      email: user.email,
    };

    return res.json({ message: "User LoggedIn ", userInfo });
  } catch (error) {
    res.json({ message: "Error searching for User" });
  }
}

module.exports = { handleRegistNewUser, handleUserSignIn };
