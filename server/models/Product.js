const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    _id: String,
    name: {
      type: String,
      // required: true,
      unique: true,
    },
    description: {
      type: String,
      // required: true,
    },
    image: {
      type: String,
      // required: true,
    },
    categoryId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

var Products = mongoose.model("Product", productSchema);

module.exports = Products;
