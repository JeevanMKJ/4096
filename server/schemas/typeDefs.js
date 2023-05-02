const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    scores: [Scores]
  }

  type Score {
    score: Int
  }

  type Query {
    me(id: ID!): User
     }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveScore(score: Int!): User
    removeScore(score: Int!): User
  }
`;

module.exports = typeDefs;
