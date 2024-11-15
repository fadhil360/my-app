import React, { useState } from 'react';
import CommandBlock from './CommandBlock';
import Robot from './Robot';
import './styles.css';

const App = () => {
  const [commands, setCommands] = useState([]);

  // Function to add command to the list
  const addCommand = (command) => {
    setCommands([...commands, command]);
  };

  // Function to reset commands
  const resetCommands = () => {
    setCommands([]);
  };

  return (
    <div className="app">
      <h1>Virtual Lab: Puzzle Pemrograman</h1>
      <div className="container">
        <CommandBlock addCommand={addCommand} />
        <div className="command-list">
          <h3>Command List:</h3>
          {commands.map((cmd, index) => (
            <div key={index} className="command">
              {index + 1}. {cmd}
            </div>
          ))}
          <button onClick={resetCommands} className="reset-btn">
            Reset
          </button>
        </div>
        <Robot commands={commands} />
      </div>
    </div>
  );
};

export default App;
