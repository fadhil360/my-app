import React, { useEffect, useRef, useState } from 'react';
import './styles.css';

const App = () => {
  const canvasRef = useRef(null);
  const [square, setSquare] = useState({
    x: 100,
    y: 100,
    size: 100,
    color: 'blue',
  });

  // Function to draw the square
  const drawSquare = (ctx, x, y, size, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
  };

  // Function to handle mouse click
  const handleCanvasClick = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    // Get mouse coordinates relative to the canvas
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Check if the mouse is within the square boundaries
    if (
      mouseX >= square.x &&
      mouseX <= square.x + square.size &&
      mouseY >= square.y &&
      mouseY <= square.y + square.size
    ) {
      alert('Square clicked!');
      // Change color of the square on click
      setSquare((prevSquare) => ({
        ...prevSquare,
        color: prevSquare.color === 'blue' ? 'red' : 'blue',
      }));
    }
  };

  // useEffect to draw the square when the component mounts or updates
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear canvas before redrawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the square
    drawSquare(ctx, square.x, square.y, square.size, square.color);
  }, [square]);

  return (
    <div className="app">
      <h1>Clickable Square in Canvas</h1>
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        onClick={handleCanvasClick}
        style={{ border: '1px solid #ddd' }}
      />
    </div>
  );
};

export default App;
