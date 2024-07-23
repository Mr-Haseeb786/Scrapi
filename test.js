const bcrypt = require("bcryptjs");

async function hashPass() {
  const pass = "Password";
  const hash = await bcrypt.hash(pass, 10);

  console.log(hash);

  const matchRes = await bcrypt.compare("Password", hash);

  console.log(matchRes);
}

hashPass();
