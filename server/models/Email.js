const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emailSchema = new Schema(
  {
    _id: String,
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

var Email = mongoose.model("Email", emailSchema);

module.exports = Email;
