const mongoose = require("mongoose");

// Define the schema for the IChronicles collection
const ICorinthiansSchema = new mongoose.Schema(
  {
    // Define the fields and their types here
    // For example:
    book: { type: String },
    chapters: { type: Array },
    verses: { type: Array },
    text: { type: String },
  },

  { collection: "1Corinthians" }
);

// Create the Mongoose model

const ICorinthians = mongoose.model("ICorinthians", ICorinthiansSchema);

// Export the model

module.exports = ICorinthians;
