const mongoose = require("mongoose");

const IJohnSchema = new mongoose.Schema(
  {
    book: { type: String },
    chapters: { type: Array },
    verses: { type: Array },
    text: { type: String },
  },
  { collection: "1John" }
);

const IJohn = mongoose.model("IJohn", IJohnSchema);

module.exports = IJohn;
