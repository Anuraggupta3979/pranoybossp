const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    _id: String,
    name: {
      type: String,
      required: true,
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
  },
  {
    timestamps: true,
  }
);

var Category = mongoose.model("Category", categorySchema);

module.exports = Category;
