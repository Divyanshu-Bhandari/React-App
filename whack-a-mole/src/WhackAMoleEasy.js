// WhackAMoleEasy.js
import React, { useState, useEffect } from "react";
import "./whack-a-mole-main.css";

const TOTAL_MOLES = 6;
const MOLE_APPEAR_TIME = 1000; // in milliseconds
const GAME_DURATION = 10000; // in milliseconds (10 seconds)

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const WhackAMoleEasy = () => {
  const [moles, setMoles] = useState(Array(TOTAL_MOLES).fill(false));
  const [score, setScore] = useState(0);

  useEffect(() => {
    let gameTimer = null;
    let moleTimer = null;

    const startGame = () => {
      gameTimer = setTimeout(() => {
        clearInterval(moleTimer);
        alert(`Game Over! Your score: ${score}`);
      }, GAME_DURATION);

      moleTimer = setInterval(() => {
        const randomIndex = getRandomInt(0, TOTAL_MOLES - 1);
        setMoles((prevMoles) => {
          const newMoles = [...prevMoles];
          newMoles[randomIndex] = true;
          return newMoles;
        });

        setTimeout(() => {
          setMoles((prevMoles) => {
            const newMoles = [...prevMoles];
            newMoles[randomIndex] = false;
            return newMoles;
          });
        }, MOLE_APPEAR_TIME);
      }, MOLE_APPEAR_TIME);
    };

    startGame();

    return () => {
      clearTimeout(gameTimer);
      clearInterval(moleTimer);
    };
  }, [score]);

  const handleMoleClick = (index) => {
    if (moles[index]) {
      setScore(score + 1);
    }
  };

  return (
    <div className="App">
      <h1>Whack-a-Mole (Easy Mode)</h1>
      <button>Start</button>
      <div className="game-container">
        {moles.map((mole, index) => (
          <div
            key={index}
            className={`mole ${mole ? "up" : "down"}`}
            onClick={() => handleMoleClick(index)}
          />
        ))}
      </div>
      <h2>Score: {score}</h2>
    </div>
  );
};

export default WhackAMoleEasy;
