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
    categoryId: {
      type: String,
      required: true,
    },
    material: {
      type: String,
    },
    dimensions: {
      type: String,
    },
    weight: {
      type: String,
    },
    hot: {
      type: Boolean,
      default: false,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

var Products = mongoose.model("Product", productSchema);

module.exports = Products;
