import React, { useState, useEffect } from "react";
import cloneDeep from "lodash.clonedeep";
import { useEvent, getColors } from "./Tile.js";
import Swipe from "react-easy-swipe";
import { style } from "./GameStyles.js";
import { useMutation } from '@apollo/client';

import { SAVE_SCORE } from '../utils/mutations';
import { QUERY_SCORES, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

function Game() {
  const [score, setScore] = useState(0);
  const WINNING_NUMBER = 4096;
  const [gameWon, setGameWon] = useState(false);
  const [saveScore, { error }] = useMutation(SAVE_SCORE);

  const handleScoreSave = async () => {
console.log(Auth.getProfile().data)
    try {
      const { data } = await saveScore({
        variables: {
          points: score,
          player: Auth.getProfile().data.username,
        },
      });

    } catch (err) {
      console.error(err);
    }
  };

  const UP_ARROW = 38;
  const DOWN_ARROW = 40;
  const LEFT_ARROW = 37;
  const RIGHT_ARROW = 39;

  const [data, setData] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  const [gameOver, setGameOver] = useState(false);

  // Initialize
  const initialize = () => {
    let newGrid = cloneDeep(data);

    addNumber(newGrid);
    addNumber(newGrid);
    setData(newGrid);
  };

  // AddNumber - Add an item
  const addNumber = (newGrid) => {
    let added = false;
    let gridFull = false;
    let attempts = 0;
    while (!added) {
      if (gridFull) {
        break;
      }

      let rand1 = Math.floor(Math.random() * 4);
      let rand2 = Math.floor(Math.random() * 4);
      attempts++;
      if (newGrid[rand1][rand2] === 0) {
        newGrid[rand1][rand2] = Math.random() > 0.5 ? 2 : 4;
        added = true;
      }
      if (attempts > 50) {
        gridFull = true;
        let gameOverr = checkIfGameOver();
        if (gameOverr) {
          alert("game over");
          
          // setGameOver(true);
        }
        // setGameOver(true);
      }
    }
  };
  // Swipe Left
  const swipeLeft = (dummy) => {
    let oldGrid = data;
    let newArray = cloneDeep(data);
    let newScore = score;

    for (let i = 0; i < 4; i++) {
      let b = newArray[i];
      let slow = 0;
      let fast = 1;
      while (slow < 4) {
        if (fast === 4) {
          fast = slow + 1;
          slow++;
          continue;
        }
        if (b[slow] === 0 && b[fast] === 0) {
          fast++;
        } else if (b[slow] === 0 && b[fast] !== 0) {
          b[slow] = b[fast];
          b[fast] = 0;
          fast++;
        } else if (b[slow] !== 0 && b[fast] === 0) {
          fast++;
        } else if (b[slow] !== 0 && b[fast] !== 0) {
          if (b[slow] === b[fast]) {
            b[slow] = b[slow] + b[fast];
            newScore += b[slow];
            b[fast] = 0;
            fast = slow + 1;
            slow++;
          } else {
            slow++;
            fast = slow + 1;
          }
        }
      }
    }

    if (checkIfGameWon(newArray)) {
      setGameWon(true);
      return;
    }

    if (JSON.stringify(oldGrid) !== JSON.stringify(newArray)) {
      addNumber(newArray);
    }
    if (dummy) {
      return newArray;
    } else {
      setData(newArray);
      setScore(newScore);
    }
  };
  // Swipe Right
  const swipeRight = (dummy) => {
    let oldData = data;
    let newArray = cloneDeep(data);
    let newScore = score;

    for (let i = 3; i >= 0; i--) {
      let b = newArray[i];
      let slow = b.length - 1;
      let fast = slow - 1;
      while (slow > 0) {
        if (fast === -1) {
          fast = slow - 1;
          slow--;
          continue;
        }
        if (b[slow] === 0 && b[fast] === 0) {
          fast--;
        } else if (b[slow] === 0 && b[fast] !== 0) {
          b[slow] = b[fast];
          b[fast] = 0;
          fast--;
        } else if (b[slow] !== 0 && b[fast] === 0) {
          fast--;
        } else if (b[slow] !== 0 && b[fast] !== 0) {
          if (b[slow] === b[fast]) {
            b[slow] = b[slow] + b[fast];
            newScore += b[slow];
            b[fast] = 0;
            fast = slow - 1;
            slow--;
          } else {
            slow--;
            fast = slow - 1;
          }
        }
      }
    }

    if (checkIfGameWon(newArray)) {
      setGameWon(true);
      return;
    }

    if (JSON.stringify(newArray) !== JSON.stringify(oldData)) {
      addNumber(newArray);
    }
    if (dummy) {
      return newArray;
    } else {
      setData(newArray);
      setScore(newScore);
    }
  };
  // Swipe Down
  const swipeDown = (dummy) => {
    let b = cloneDeep(data);
    let oldData = JSON.parse(JSON.stringify(data));
    let newScore = score;

    for (let i = 3; i >= 0; i--) {
      let slow = b.length - 1;
      let fast = slow - 1;
      while (slow > 0) {
        if (fast === -1) {
          fast = slow - 1;
          slow--;
          continue;
        }
        if (b[slow][i] === 0 && b[fast][i] === 0) {
          fast--;
        } else if (b[slow][i] === 0 && b[fast][i] !== 0) {
          b[slow][i] = b[fast][i];
          b[fast][i] = 0;
          fast--;
        } else if (b[slow][i] !== 0 && b[fast][i] === 0) {
          fast--;
        } else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
          if (b[slow][i] === b[fast][i]) {
            b[slow][i] = b[slow][i] + b[fast][i];
            newScore += b[slow][i];
            b[fast][i] = 0;
            fast = slow - 1;
            slow--;
          } else {
            slow--;
            fast = slow - 1;
          }
        }
      }
    }

    if (checkIfGameWon(b)) {
      setGameWon(true);
      return;
    }

    if (JSON.stringify(b) !== JSON.stringify(oldData)) {
      addNumber(b);
    }
    if (dummy) {
      return b;
    } else {
      setData(b);
      setScore(newScore);
    }
  };
  // Swipe Up
  const swipeUp = (dummy) => {
    let b = cloneDeep(data);
    let oldData = JSON.parse(JSON.stringify(data));
    let newScore = score;

    for (let i = 0; i < 4; i++) {
      let slow = 0;
      let fast = 1;
      while (slow < 4) {
        if (fast === 4) {
          fast = slow + 1;
          slow++;
          continue;
        }
        if (b[slow][i] === 0 && b[fast][i] === 0) {
          fast++;
        } else if (b[slow][i] === 0 && b[fast][i] !== 0) {
          b[slow][i] = b[fast][i];
          b[fast][i] = 0;
          fast++;
        } else if (b[slow][i] !== 0 && b[fast][i] === 0) {
          fast++;
        } else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
          if (b[slow][i] === b[fast][i]) {
            b[slow][i] = b[slow][i] + b[fast][i];
            newScore += b[slow][i];
            b[fast][i] = 0;
            fast = slow + 1;
            slow++;
          } else {
            slow++;
            fast = slow + 1;
          }
        }
      }
    }

    if (checkIfGameWon(b)) {
      setGameWon(true);
      return;
    }

    if (JSON.stringify(oldData) !== JSON.stringify(b)) {
      addNumber(b);
    }
    if (dummy) {
      return b;
    } else {
      setData(b);
      setScore(newScore);
    }
  };
  // Check Gameover
  const checkIfGameOver = () => {
    // let original = cloneDeep(data);
    let checker = swipeLeft(true);

    if (JSON.stringify(data) !== JSON.stringify(checker)) {
      return false;
    }

    let checker2 = swipeDown(true);
    if (JSON.stringify(data) !== JSON.stringify(checker2)) {
      return false;
    }

    let checker3 = swipeRight(true);

    if (JSON.stringify(data) !== JSON.stringify(checker3)) {
      return false;
    }

    let checker4 = swipeUp(true);

    if (JSON.stringify(data) !== JSON.stringify(checker4)) {
      return false;
    }

    if (checkIfGameWon(data)) {
      setGameWon(true);
      return false;
    }

    return true;
  };

  // Check if Game Won
  const checkIfGameWon = (grid) => {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === WINNING_NUMBER) {
          return true;
        }
      }
    }
    return false;
  };

  // Reset
  const resetGame = () => {
    handleScoreSave()
    setGameOver(false);
    setGameWon(false);
    setScore(0);

    const emptyGrid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    addNumber(emptyGrid);
    addNumber(emptyGrid);
    setData(emptyGrid);
    // initialize();
  };

  const handleKeyDown = (event) => {
    event.preventDefault();
    if (gameOver || gameWon) {
      return;
    }
    switch (event.keyCode) {
      case UP_ARROW:
        swipeUp();

        break;
      case DOWN_ARROW:
        swipeDown();

        break;
      case LEFT_ARROW:
        swipeLeft();

        break;
      case RIGHT_ARROW:
        swipeRight();

        break;
      default:
        break;
    }

    let gameOverr = checkIfGameOver();
    if (gameOverr) {
     
      
      setGameOver(true);
      
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  useEvent("keydown", handleKeyDown);

  return (
    <div className="App">
      <div
        style={{
          width: 345,
          margin: "auto",
          marginTop: 30,
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              flex: 1,
              fontWeight: "700",
              fontSize: 24,
              color: "#776e65",
              alignSelf: "center",
              fontFamily: "serif",
              fontSize: 25,
            }}
          >
            Score: {score}
          </div>
          <div
            style={{
              flex: 1,
              marginTop: "auto",
              fontFamily: "serif",
              fontSize: 20,
            }}
          >
            <div onClick={resetGame} style={style.newGameButton}>
              NEW GAME
            </div>
          </div>
        </div>
        <div
          style={{
            background: "#AD9D8F",
            width: "max-content",
            height: "max-content",
            margin: "auto",
            padding: 5,
            borderRadius: 5,
            marginTop: 10,
            position: "relative",
          }}
        >
          {gameOver && (
            <div style={style.gameOverOverlay}>
              <div>
                <div
                  style={{
                    fontSize: 30,
                    fontFamily: "sans-serif",
                    fontWeight: "900",
                    color: "#776E65",
                  }}
                >
                  Game Over!
                </div>
                <div>
                  <div
                    style={{
                      flex: 1,
                      marginTop: "auto",
                    }}
                  >
                    <div onClick={resetGame} style={style.tryAgainButton}>
                      Try Again
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {gameWon && (
            <div style={style.gameOverOverlay}>
              <div>
                <div
                  style={{
                    fontSize: 30,
                    fontFamily: "sans-serif",
                    fontWeight: "900",
                    color: "#776E65",
                  }}
                >
                  You Won!
                </div>
                <div>
                  <div
                    style={{
                      flex: 1,
                      marginTop: "auto",
                    }}
                  >
                    <div onClick={resetGame} style={style.tryAgainButton}>
                      Try Again
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <Swipe
            onSwipeDown={() => {
              swipeDown();
            }}
            onSwipeLeft={() => swipeLeft()}
            onSwipeRight={() => swipeRight()}
            onSwipeUp={() => swipeUp()}
            style={{ overflowY: "hidden" }}
          >
            {data.map((row, oneIndex) => {
              return (
                <div style={{ display: "flex" }} key={oneIndex}>
                  {row.map((digit, index) => (
                    <Block num={digit} key={index} />
                  ))}
                </div>
              );
            })}
          </Swipe>
        </div>
      </div>
    </div>
  );
}

const Block = ({ num }) => {
  const { blockStyle } = style;

  return (
    <div
      style={{
        ...blockStyle,
        background: getColors(num),
        color: num === 2 || num === 4 ? "#645B52" : "#F7F4EF",
      }}
    >
      {num !== 0 ? num : ""}
    </div>
  );
};

export default Game;
