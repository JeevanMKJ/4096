import { gql } from "@apollo/client";

export const QUERY_ME = gql`
query me {
    me {
      _id
      username
      email
      scores {
        points
        player
      }
    }
  }
  `;

  export const QUERY_SCORES = gql`
  query Scores {
    scores {
      _id
      player
      points
    }
  }
  `;

  export const QUERY_USERS = gql`
  query users {
    users {
      username
      scores {
        points
      }
      _id
      email
    }
  }
  `;

  export const QUERY_USER = gql`
  query user($userId: String!) {
    user(userId: $userId) {
      _id
      username
      scores {
        points
      }
    }
  }
  `;