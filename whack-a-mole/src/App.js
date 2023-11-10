// App.js
import React, { useState } from "react";
import WhackAMoleEasy from "./WhackAMoleEasy";
import WhackAMoleHard from "./WhackAMoleHard";
import "./App.css";

function App() {
  const [selectedMode, setSelectedMode] = useState(null);

  const handleModeSelect = (mode) => {
    setSelectedMode(mode);
  };

  const renderSelectedMode = () => {
    switch (selectedMode) {
      case "easy":
        return <WhackAMoleEasy />;
      case "hard":
        return <WhackAMoleHard />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <h1>Whack-a-Mole Game</h1>
      <div className="mode-selector">
        <button onClick={() => handleModeSelect("easy")}>Easy Mode</button>
        <button onClick={() => handleModeSelect("hard")}>Hard Mode</button>
      </div>
      {renderSelectedMode()}
    </div>
  );
}

export default App;
