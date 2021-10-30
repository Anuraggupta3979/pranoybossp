const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  category: String,
});

module.exports = mongoose.model("Product", schema);
