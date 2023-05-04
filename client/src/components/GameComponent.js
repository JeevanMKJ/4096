import React from "react";
import Grid from "./grid";

export default function GameComponent() {
  return <Grid />;
}

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












