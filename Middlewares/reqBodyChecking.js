function reqBodyCheck(req, res, next) {
  if (!req.body) res.status(400).json({ message: "No Body Detected" });

  console.log(req.body);

  const { priceLimits, currency, itemToSearch, sitesToSearch } = req.body;

  if (!priceLimits || !currency || !itemToSearch || !sitesToSearch) {
    return res.status(400).json({
      message:
        "The body should contain all of these: priceLimits, currency, itemToSearch and an array of sitesToSearch",
    });
  }

  const { highPrice, lowPrice } = priceLimits;

  if (!highPrice || !lowPrice) {
    return res
      .status(400)
      .json({ message: "No highPrice or lowPrice keys detected!" });
  }

  if (highPrice < lowPrice) {
    return res
      .status(400)
      .json({ message: "High Price can not be less than Low Price" });
  }

  if (!Array.isArray(sitesToSearch)) {
    return res.status(400).json({ message: "sitesToSearch Must be an Array" });
  }

  if (sitesToSearch.length > 3) {
    return res.status(400).json({
      message:
        "There are only two sites available to search from: Amazon, AliExpress",
    });
  }

  const amazonPresent = sitesToSearch.includes("AMAZON");
  const aliExpressPresent = sitesToSearch.includes("ALIEXPRESS");
  const darazPresent = sitesToSearch.includes("DARAZ");

  if (!amazonPresent && !aliExpressPresent && !darazPresent) {
    return res
      .status(400)
      .json({ message: "Available sites are AMAZON, ALIEXPRESS and DARAZ" });
  }

  if (itemToSearch.length < 2) {
    return res
      .status(400)
      .json({ message: "Atleast 2 words are required to search for" });
  }

  if (currency.toUpperCase() != "DOLLAR") {
    return res.status(400).json({ message: "Accepted currency is DOLLAR" });
  }

  next();
  return;
}

function userReqBodyCheck(req, res, next) {
  const body = req.body;

  if (req.method != "POST") {
    next();
  }

  if (!body) return res.status(400).json({ error: "No Request Body Found" });

  const { username, email, password } = body;

  if (!username || !email || !password)
    return res
      .status(400)
      .json({ error: "No username or email or password provided" });

  if (password.length < 5)
    return res
      .status(400)
      .json({ error: "Password length must be greater than 7" });

  if (username.length < 3)
    return res
      .status(400)
      .json({ error: "Username must be more than 4 characters" });

  next();
}

module.exports = {
  reqBodyCheck,
  userReqBodyCheck,
};
