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
    score: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String): User
    scores(username: String): [Scores]
    me: User

     }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    removeUser(userId: ID!): User
    saveScore(scores: Int!): User
    removeScore(scores: Int!): User

  }
`;

module.exports = typeDefs;
