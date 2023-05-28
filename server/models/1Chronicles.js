const mongoose = require("mongoose");

// Define the schema for the IChronicles collection
const IChroniclesSchema = new mongoose.Schema(
  {
    // Define the fields and their types here
    // For example:
    book: { type: String },
    chapters: { type: Array },
    verses: { type: Array },
    text: { type: String },
  },

  { collection: "1Chronicles" }
);

// Create the Mongoose model
const IChronicles = mongoose.model("IChronicles", IChroniclesSchema);

// Export the model
module.exports = IChronicles;
