const IChronicles = require("./models/1Chronicles");
const ICorinthians = require("./models/1Corinthians");
const IJohn = require("./models/1John");
const IKings = require("./models/1Kings");
const IPeter = require("./models/1Peter");

const resolvers = {
  Query: {
    IChronicles: async () => {
      return await IChronicles.find();
    },

    ICorinthians: async () => {
      return await ICorinthians.find();
    },

    IJohn: async () => {
      return await IJohn.find();
    },

    IKings: async () => {
      return await IKings.find();
    },

    IPeter: async () => {
      return await IPeter.find();
    },
  },
};

module.exports = resolvers;
