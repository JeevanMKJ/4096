import React from "react";
import Grid from "./grid";

export default function GameComponent() {
  return <Grid />;
}
// game layout for 8x8 4096 game board
export const getEmptyBoard = () => [
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
];
// function to used to determine if the given square has value later on
const holdsValue = (board, value) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === value) {
                return true;
            }
        }
    }
    return false;
};

export const isFull = (board) => {
    return !holdsValue(board, 0);
};
// function to grab a random spot on each axis
const getRandomSpot = () => {
    const rowSpot = Math.floor(Math.random() * 8);
    const colSpot = Math.floor(Math.random() * 8);
    return [rowSpot, colSpot];
};

export const createRandomSpot = (board) => {
    if (isFull(board)) {
        return board;
    }

let [row, col] = getRandomSpot();
while (board[row][col] !== 0) {
    [row, col] = getRandomSpot();
}

board[row][col] = 2;
return board;

};
// this is ised to "eat" the number of the same value
const combine = (board) => {
  const newGame = getEmptyBoard();
  for (let i = 0; i < board.length; i++) {
    let colMarker = 0;
    for (let j =0; j < board[i].length; j++) {
      if (board[i][j] !== 0) {
        newGame[i][colMarker] = board[i][j];
        colMarker++;
      }
    }
  }
  return newGame;
};
// this finished the rest of combine function.  EX one 2 eats another 2 to create a 4
const merge = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length - 1; j++) {
      if (board[i][j] !== 0 && board[i][j] === board[i][j + 1]) {
        board[i][j] = board[i][j] * 2;
        board[i][j + 1] = 0;
      }
    }
  }

  return board;
};

export const moveLeft = (board) => {
  const newGame1 = combine(board);
  const newGame2 = merge(newGame1);
  return combine(newGame2);
};
// this will roatte direction to tackle other end of board
const flip = (board) => {
  const flipBoard = getEmptyBoard();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      flipBoard[i][j] = board[i][board[i].length - 1 - j];
    }
  }
  return flipBoard;
};

export const moveRight = (board) => {
  const flipBoard = flip(board);
  const newGame = moveLeft(flipBoard);
  return flip(newGame);
};

const turnLeft = (board) => {
  const flipBoard = getEmptyBoard();

  for (let i =0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++){
      flipBoard[i][j] = board[j][board[i].length - 1 - i];
    }
  }
  return flipBoard;
};

const turnRight = (board) => {
  const flipBoard = getEmptyBoard();

  for (let i =0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      flipBoard[i][j] = board[board[i].length - 1 - j][i];
    }
  }
  return flipBoard;
};

export const moveUp = (board) => {
  const flipBoard = turnLeft(board);
  const newGame = moveLeft(flipBoard);
  return turnRight(newGame);
};

export const moveDown = (board) => {
  const flipBoard = turnRight(board);
  const newGame = turnLeft(flipBoard);
  return turnLeft(newGame);
};
// value used to check if the score of a square has reached 4096
export const gameFinished = (board) => {
  return holdsValue(board, 4096);
};















