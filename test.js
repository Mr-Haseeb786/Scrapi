const { createClient } = require("redis");
const client = createClient();

const products = [
  {
    id: 1,
    name: "powder",
    price: 200,
  },
  {
    id: 2,
    name: "chowder",
    price: 4000,
  },
];

async function testing() {
  try {
    await client.connect();

    await client.json.set(
      "productsJson",
      "$ratings",
      JSON.stringify({ ratings: 300 })
    );
    console.log("Connected");

    const results = await client.json.get("productsJson", "$");
    const ratings = await client.json.get("productsJson", "$ratings");

    console.log(results, ratings);
  } catch (error) {
    console.log(error);
  }
}

testing();
