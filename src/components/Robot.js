import React, { useEffect, useState } from 'react';

const Robot = ({ commands, startRobot, updatePosition, squares, setSquares }) => {
  const [position, setPosition] = useState({ x: 0, y: 0, color: 'blue' });

  const moveNorth = (pos) => {
    const newY = pos.y - 1 < 0 ? 9 : pos.y - 1;
    return { ...pos, y: newY };
  };

  const moveSouth = (pos) => {
    const newY = pos.y + 1 > 9 ? 0 : pos.y + 1;
    return { ...pos, y: newY };
  };

  const moveEast = (pos) => {
    const newX = pos.x + 1 > 9 ? 0 : pos.x + 1;
    return { ...pos, x: newX };
  };

  const moveWest = (pos) => {
    const newX = pos.x - 1 < 0 ? 9 : pos.x - 1;
    return { ...pos, x: newX };
  };

  const Change = (pos) => {
    let pickedUpItem = pos.item; // Start with the robot's current item
    const updatedSquares = squares.map((square) => {
      // If the robot is on the same square and there's an item to pick up
      if (pos.x === square.x && pos.y === square.y ) {
        square.color='blue'; // Robot picks up the item
        // Remove the item from the square after pickup
      }
      return square;
    });
  
    setSquares(updatedSquares); // Update squares in App.js
    return { ...pos, item: pickedUpItem }; // Return the robot's updated position and item
  };
  
  
  // Helper function to introduce a delay
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  useEffect(() => {
    let isRunning = true; // Control flag for stopping the loop

    // Async function to execute commands with delay
    const executeCommands = async () => {
      while (isRunning && startRobot) {
        for (const command of commands) {
          if (!isRunning || !startRobot) break;

          setPosition((prevPosition) => {
            let newPosition = prevPosition;
            if (command === 'Move North') newPosition = moveNorth(prevPosition);
            if (command === 'Move East') newPosition = moveEast(prevPosition);
            if (command === 'Move South') newPosition = moveSouth(prevPosition);
            if (command === 'Move West') newPosition = moveWest(prevPosition);
            if (command === 'Change') newPosition = Change(prevPosition);
            console.log(command);
            console.log('Updated Position:', newPosition);

            // Call updatePosition with the new position
            updatePosition(newPosition);

            return newPosition; // Update the state correctly
          });

          await sleep(100); // 0.5-second delay
        }
      }
    };

    if (startRobot) {
      executeCommands();
    }

    // Clean up function to stop the loop when component unmounts or stops
    return () => {
      isRunning = false;
    };
  }, [startRobot, commands]);

  return null;
};

export default Robot;
