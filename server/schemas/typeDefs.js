const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    scores: [Scores]
  }


  type Scores {
    _id: ID
    points: Int
    player: String
  }

  type Auth {
    token: ID!
    user: User

  }

  type Query {
    users: [User]
    user(userId: String!): User
    scores: [Scores]
    me: User
     }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    removeUser(userId: ID!): User
    saveScore(points: Int, player: String!): Scores
    removeScore(scoresID: ID!): Scores
  }
`;

module.exports = typeDefs;
