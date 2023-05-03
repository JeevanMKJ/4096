const { User, Scores } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('scores');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('scores');
    },
    scores: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Scores.find(params).sort({ createdAt: -1 });
    },
  },
  
  Mutation: {
    //POST scores
    saveScore: async (parent, { scores }, context) => {
      if (context.user) {
        const score = await Scores.create({
          scores,
          player: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { scores: scores.scores } }
        );

        return score;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    //POST users
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({username, email, password});
      const token = signToken(user);
      return { user, token };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    //UPDATE high scores------????????????????

    removeScore: async (parent, { scores }, context) => {
      if (context.user) {
        const score = await Scores.findOneAndDelete({
          scores: scores,
          player: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { scores: scores.scores } }
        );

        return score;
      }
      throw new AuthenticationError('You need to be logged in!');

    },
    //DELETE user
    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
  },
};

module.exports = resolvers;
