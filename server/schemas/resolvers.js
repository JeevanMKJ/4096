const { undefined, undefined2 } = require("../models");

const resolvers = {
  Query: {
    tech: async () => {
      return undefined.find({});
    },
    matchups: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return undefined2.find(params);
    },
  },
  Mutation: {
    createMatchup: async (parent, args) => {
      const matchup = await undefined2.create(args);
      return matchup;
    },
    createVote: async (parent, { _id, techNum }) => {
      const vote = await undefined2.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
  },
};

module.exports = resolvers;
