import React from 'react';

const CommandBlock = ({ onClose,addCommand }) => {
  const commands = ['Move North','Move East', 'Move South', 'Move West','Change'];

  return (
    <div className="block-container">
      <div className="reset">
      <h3>Pick Command:</h3>
      <button onClick={onClose}className="close-btn">Close </button>

      </div>
      {commands.map((command, index) => (
        <div
          key={index}
          className="block"
          onClick={() => addCommand(command)}
        >
          {command}
        </div>
      ))}
    </div>
  );
};

export default CommandBlock;
