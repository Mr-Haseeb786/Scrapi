const { Schema, model } = require("mongoose");

const favProductsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imgLink: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
    linkToProduct: {
      type: String,
      required: true,
    },
    producOriginSite: {
      type: String,
      required: true,
    },
    reviews: {
      type: Number,
      required: true,
    },
    ratings: {
      type: Number,
      required: true,
    },
    favouritedBy: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true }
);

const favProductsModel = model("FavouriteProducts", favProductsSchema);

module.exports = { favProductsModel };
