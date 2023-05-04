import { gql } from "@apollo/client";

export const QUERY_ME = gql`
query me {
    me {
      _id
      username
      email
      password
      scores {
        points
      }
    }
  }
  `;

  export const QUERY_SCORES = gql`
  query scores {
    scores {
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
    }
  }
  `;

  export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      username
      scores {
        points
      }
    }
  }
  `;