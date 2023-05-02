const { User } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('thoughts');
    },
  },
  
  Mutation: {
    //POST scores
    saveScore: async (parent, { userId, score }, context) => {
    
      if (context.user) {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: { scores: score },
        },
        {
          new: true,
          runValidators: true,
        }
        );
     } 
     throw new AuthenticationError("You must be logged in to save scores!")
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
    removeScore: async (parent, { userId, skill }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { scores: score } },
        { new: true }
      );
    },
    //DELETE user
    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: usereId });
    },
  },
};

module.exports = resolvers;
