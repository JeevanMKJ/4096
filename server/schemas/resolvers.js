const { User, Scores } = require("../models");

const { signToken } = require('../utils/auth.js')
const { AuthenticationError } = require('apollo-server-express');


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
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  },
  
  Mutation: {
    //POST scores

    saveScore: async (parent, { points, player }, context) => {
      if (context.user) {
        const score = await Scores.create({
          points,
          player
        });

        await User.findOneAndUpdate(
          { username: player },
          { $addToSet: { scores: score._id } }
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

    removeScore: async (parent, { scoreId }) => {
   return Scores.findOneAndDelete({ _id: scoreId });
      },
    //DELETE user
    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
  },
};

module.exports = resolvers;
