function handleSearchProducts(req, res) {
  res.set("Access-Control-Allow-Origin", "http://localhost:5173");

  // console.log(req.body);
  res.end("Got it!");
}

module.exports = { handleSearchProducts };
