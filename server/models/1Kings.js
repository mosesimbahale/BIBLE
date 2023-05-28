const mongoose = require("mongoose");

const IKingsSchema = new mongoose.Schema(
  {
    book: { type: String },
    chapters: { type: Array },
    verses: { type: Array },
    text: { type: String },
  },
  { collection: "1Kings" }
);

const IKings = mongoose.model("IKings", IKingsSchema);

module.exports = IKings;
