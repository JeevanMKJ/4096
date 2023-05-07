import { gql } from "@apollo/client";

export const ADD_USER = gql `
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      email
      username
      scores {
        points
      }
    }
  }
}
  `;

  export const LOGIN = gql `
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        username
        scores {
          points
        }
      }
    }
  }
`

export const SAVE_SCORE = gql `
mutation saveScore($player: player, $points: points) {
saveScore(player: $player, points: $points) {
  _id
  player
  points
}
}
`

export const REMOVE_USER = gql `
mutation removeUser($userId: userId) {
removeUser(userId: $userId) {
  username
}
}
`