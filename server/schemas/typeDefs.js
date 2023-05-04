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
    _id: ID!
    points: Int!
    player: String
  }

  type Auth {
    token: ID!
    user: User

  }

  type Auth {
    token: ID!
    user: User

  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]

    user(userId: ID!): User
    scores: [Scores]
    me: User

     }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    removeUser(userId: ID!): User
    saveScore(points: Int!): Scores
    removeScore(userID: ID! points: Int!): Scores
  }
`;

module.exports = typeDefs;
