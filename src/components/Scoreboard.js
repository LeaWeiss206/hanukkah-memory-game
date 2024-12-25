import React from 'react';

const Scoreboard = ({ winner, onNewGame }) => {
  return (
    <div className="scoreboard">
      <h2>Winner: {winner}</h2>
      <button onClick={() => onNewGame(['Player 1', 'Player 2'])}>Start New Game</button>
    </div>
  );
};

export default Scoreboard;
