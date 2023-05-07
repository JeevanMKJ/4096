import React, { useEffect, useState } from "react";

import {
    getEmptyBoard,
    createRandomSpot,
    moveLeft,
    moveRight,
    moveUp,
    moveDown,
    gameOver,
    gameWon,
} from "./GameComponent";

const Cell = ({ number }) => {
    return (
        <div className={`cell cell-${number}`}>{number > 0 ? number : ""}</div>
    );
};

const GameController = () => {
    const [board, updatedBoard] = useState(getRandomSpot(getEmptyBoard()));

    const checkGameOver = () => {
        if (gameWon(board)) {
            console.log("You Won the Game!");
        } else if (gameOver(board)) {
            console.log("Game Over!")
        }
    }
};

const left = () => {
    const newGame = moveLeft(board);
    updatedBoard(createRandomSpot(newGame));
    checkGameOver();
};

const right = () => {
    const newGame = moveRight(board);
    updatedBoard(createRandomSpot(newGame));
    checkGameOver();
};

const up = () => {
    const newGame = moveUp(board);
    updatedBoard(createRandomSpot(newGame));
    checkGameOver();
};

const down = () => {
    const newGame = moveDown(board);
    updatedBoard(createRandomSpot(newGame));
    checkGameOver();
};

// arror key functionality to work together with lines 33-55

const keyPress = (e) => {
    switch (e.key) {
        case "LeftArrow":
            left();
            break;
        case "RightArrow":
            right();
            break;
        case "UpArrow":
            up();
            break;
        case "DownArrow":
            down();
            break;

        default:
    }
};

useEffect(() => {
    window.addEventListener("keydown", keyPress);

    return () => {
        window.removeEventListener("keydown", keyPress);
    };
});

return (
    <>
    <div className="game-board">
    {board.map((row, i) => {
        return (
            <div key={`row-${i}`} className="row">
                {row.map((cell, j) => (
                    <Cell key={`cell-${i}-${j}`} number={cell} />
                ))}
            </div>
        );
    })}
    </div>
    </>
  );

  export default GameController;
