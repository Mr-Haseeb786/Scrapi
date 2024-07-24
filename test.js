const bcrypt = require("bcryptjs");

async function hashPass() {
  const pass = "Password";
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(pass, 10);

  console.log(salt);
  console.log(hash);

  // const matchRes = await bcrypt.compare("Password", hash);

  // console.log(matchRes);
}

hashPass();
