const { Schema, model } = require("mongoose");

const favProductsSchema = new Schema(
  {
    productTitle: {
      type: String,
      required: true,
    },
    productImgLink: {
      type: String,
      required: true,
    },
    prodPrice: {
      type: Number,
    },
    prodLink: {
      type: String,
      required: true,
    },
    originSite: {
      type: String,
      required: true,
    },
    prodReviews: {
      type: Number,
    },
    prodRatings: {
      type: Number,
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
