import React, { useRef, useEffect, useState } from 'react';
import './styles.css';
import CommandBlock from './CommandBlock';
import Robot from './Robot';
const VirtualLab = () => {
  const canvasRef = useRef(null);
  
  const [square, setSquare] = useState({ x: 0, y: 0, size: 46, color: 'green'});
    const [squares, setSquares] = useState([
      {x:  0 , y:  0 , color: 'white'},
      {x:  0 , y:  1 , color: 'white'},
      {x:  0 , y:  2 , color: 'white'},
      {x:  0 , y:  3 , color: 'white'},
      {x:  0 , y:  4 , color: 'white'},
      {x:  0 , y:  5 , color: 'white'},
      {x:  0 , y:  6 , color: 'white'},
      {x:  0 , y:  7 , color: 'white'},
      {x:  0 , y:  8 , color: 'white'},
      {x:  0 , y:  9 , color: 'white'},
      {x:  1 , y:  0 , color: 'white'},
      {x:  1 , y:  1 , color: 'white'},
      {x:  1 , y:  2 , color: 'white'},
      {x:  1 , y:  3 , color: 'white'},
      {x:  1 , y:  4 , color: 'white'},
      {x:  1 , y:  5 , color: 'white'},
      {x:  1 , y:  6 , color: 'white'},
      {x:  1 , y:  7 , color: 'white'},
      {x:  1 , y:  8 , color: 'white'},
      {x:  1 , y:  9 , color: 'white'},
      {x:  2 , y:  0 , color: 'white'},
      {x:  2 , y:  1 , color: 'white'},
      {x:  2 , y:  2 , color: 'white'},
      {x:  2 , y:  3 , color: 'white'},
      {x:  2 , y:  4 , color: 'white'},
      {x:  2 , y:  5 , color: 'white'},
      {x:  2 , y:  6 , color: 'white'},
      {x:  2 , y:  7 , color: 'white'},
      {x:  2 , y:  8 , color: 'white'},
      {x:  2 , y:  9 , color: 'white'},
      {x:  3 , y:  0 , color: 'white'},
      {x:  3 , y:  1 , color: 'white'},
      {x:  3 , y:  2 , color: 'white'},
      {x:  3 , y:  3 , color: 'white'},
      {x:  3 , y:  4 , color: 'white'},
      {x:  3 , y:  5 , color: 'white'},
      {x:  3 , y:  6 , color: 'white'},
      {x:  3 , y:  7 , color: 'white'},
      {x:  3 , y:  8 , color: 'white'},
      {x:  3 , y:  9 , color: 'white'},
      {x:  4 , y:  0 , color: 'white'},
      {x:  4 , y:  1 , color: 'white'},
      {x:  4 , y:  2 , color: 'white'},
      {x:  4 , y:  3 , color: 'white'},
      {x:  4 , y:  4 , color: 'white'},
      {x:  4 , y:  5 , color: 'white'},
      {x:  4 , y:  6 , color: 'white'},
      {x:  4 , y:  7 , color: 'white'},
      {x:  4 , y:  8 , color: 'white'},
      {x:  4 , y:  9 , color: 'white'},
      {x:  5 , y:  0 , color: 'white'},
      {x:  5 , y:  1 , color: 'white'},
      {x:  5 , y:  2 , color: 'white'},
      {x:  5 , y:  3 , color: 'white'},
      {x:  5 , y:  4 , color: 'white'},
      {x:  5 , y:  5 , color: 'white'},
      {x:  5 , y:  6 , color: 'white'},
      {x:  5 , y:  7 , color: 'white'},
      {x:  5 , y:  8 , color: 'white'},
      {x:  5 , y:  9 , color: 'white'},
      {x:  6 , y:  0 , color: 'white'},
      {x:  6 , y:  1 , color: 'white'},
      {x:  6 , y:  2 , color: 'white'},
      {x:  6 , y:  3 , color: 'white'},
      {x:  6 , y:  4 , color: 'white'},
      {x:  6 , y:  5 , color: 'white'},
      {x:  6 , y:  6 , color: 'white'},
      {x:  6 , y:  7 , color: 'white'},
      {x:  6 , y:  8 , color: 'white'},
      {x:  6 , y:  9 , color: 'white'},
      {x:  7 , y:  0 , color: 'white'},
      {x:  7 , y:  1 , color: 'white'},
      {x:  7 , y:  2 , color: 'white'},
      {x:  7 , y:  3 , color: 'white'},
      {x:  7 , y:  4 , color: 'white'},
      {x:  7 , y:  5 , color: 'white'},
      {x:  7 , y:  6 , color: 'white'},
      {x:  7 , y:  7 , color: 'white'},
      {x:  7 , y:  8 , color: 'white'},
      {x:  7 , y:  9 , color: 'white'},
      {x:  8 , y:  0 , color: 'white'},
      {x:  8 , y:  1 , color: 'white'},
      {x:  8 , y:  2 , color: 'white'},
      {x:  8 , y:  3 , color: 'white'},
      {x:  8 , y:  4 , color: 'white'},
      {x:  8 , y:  5 , color: 'white'},
      {x:  8 , y:  6 , color: 'white'},
      {x:  8 , y:  7 , color: 'white'},
      {x:  8 , y:  8 , color: 'white'},
      {x:  8 , y:  9 , color: 'white'},
      {x:  9 , y:  0 , color: 'white'},
      {x:  9 , y:  1 , color: 'white'},
      {x:  9 , y:  2 , color: 'white'},
      {x:  9 , y:  3 , color: 'white'},
      {x:  9 , y:  4 , color: 'white'},
      {x:  9 , y:  5 , color: 'white'},
      {x:  9 , y:  6 , color: 'white'},
      {x:  9 , y:  7 , color: 'white'},
      {x:  9 , y:  8 , color: 'white'},
      {x:  9 , y:  9 , color: 'white'},]);
  const [showCommand, setShowCommand] = useState(false);
  const [commands, setCommands] = useState([]);
  const [startRobot, setStartRobot] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const [isClickables, setIsClickables] = useState(false);
  const [isClickabler, setIsClickabler] = useState(false);
  // Function to add command to the list
  const addCommand = (command) => {
    setCommands([...commands, command]);
    setIsClickable(true);
    stopRobotHandler()
  };

  
  // Function to reset commands
  const resetCommands = () => {
    setCommands([]);
    setIsClickable(false);
    stopRobotHandler()
  };
  const resetBoard = () => {
    setSquares(prevSquares => 
      prevSquares.map(square => ({
        ...square,
        color: "white"
      }))
    );
  };
  
  // Function to draw the square on the canvas
  const drawSquare = (ctx, x, y, size, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x* 50 + 2, y* 50 + 2, size, size);
  };

  const drawGrid = (ctx) => {
    // Set grid line color
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    const width = 500;
    const height = 500;
    const cellSize = 50;

    // Draw vertical lines
    for (let x = 0; x <= width; x += cellSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Draw horizontal lines
    for (let y = 0; y <= height; y += cellSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  };
    // Update the square position when the robot moves
    const updateSquarePosition = (newPosition) => {
      setSquare((prevSquare) => ({
        ...prevSquare,
        x: newPosition.x, // Adjusting for grid size (50px)
        y: newPosition.y ,
      }));
    };
  const startRobotHandler = () => {
    setStartRobot(true); // Trigger the Robot to start
    setIsClickables(true)
    setIsClickabler(false)
  };
  const stopRobotHandler = () => {
    setStartRobot(false); // Trigger the Robot to start
    setIsClickables(false)
    setIsClickabler(true)
  };
  // Function to handle mouse clicks on the canvas
  const handleCanvasClick = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    // Get mouse coordinates relative to the canvas
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    console.log("squre pos" + square.x )
    console.log("squre pos" + square.y )
    console.log("squre pos" + mouseX )
    console.log("squre pos" + mouseY )
    // Check if the mouse is within the square boundaries
    if (
      mouseX >= square.x * 50+2 &&
      mouseX <= square.x* 50+2 + square.size &&
      mouseY >= square.y* 50+2 &&
      mouseY <= square.y* 50+2 + square.size
    ) {
      // Toggle command block visibility when square is clicked
      setShowCommand(true);
    }
  };

  // useEffect to set up the canvas and draw the square
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear the canvas
    squares.forEach((square)=>{
      drawSquare(ctx, square.x, square.y, 46, square.color);
    })
    drawSquare(ctx, square.x, square.y, square.size, square.color);
    drawGrid(ctx);
  }, [squares,square]);

  // Function to close the CommandBlock
  const closeCommandBlock = () => {
    setShowCommand(false);
  };

  return (
    <div>
      <h1>Press the block to start giving command</h1>
      <div className="container">
        <div className='StartStop'>
          <button  className="start" 
          onClick={startRobotHandler}
          disabled={!isClickable} >
            Start
          </button>
          <button  className="start" 
          onClick={stopRobotHandler}
          disabled={!isClickables}>
            Stop
          </button>
          <button  className="start" 
          onClick={resetBoard}
          disabled={!isClickabler}>
            reset
          </button>
        </div>
        <canvas
          ref={canvasRef}
          width={500}
          height={500}
          onClick={handleCanvasClick}
          style={{ border: '1px solid black' }}
        />
          {showCommand && (
                    <div className="command-list"> 
                    <div className="reset">
                    <h3>Command List:</h3>
                      <button onClick={resetCommands} className="reset-btn">
                        Reset
                      </button>
                    </div>
            
                      {commands.map((cmd, index) => (
                        <div key={index} className="command">
                          {index + 1}. {cmd}
                        </div>
                      ))}
                    </div>
          )}

          {showCommand && (
            <CommandBlock onClose={closeCommandBlock}addCommand={addCommand} />
          )}
        <Robot commands={commands} startRobot={startRobot} updatePosition={updateSquarePosition} setSquares={setSquares} squares={squares}/>
      </div>
    </div>
  );
};

export default VirtualLab;
