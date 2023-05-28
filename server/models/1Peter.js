const mongoose = require("mongoose");

// Define the schema for the IChronicles collection
const IPeterSchema = new mongoose.Schema(
  {
    // Define the fields and their types here
    // For example:
    book: { type: String },
    chapters: { type: Array },
    verses: { type: Array },
    text: { type: String },
  },

  { collection: "1Peter" }
);

// Create the Mongoose model

const IPeter = mongoose.model("IPeter", IPeterSchema);

// Export the model

module.exports = IPeter;
