import React, { useState } from 'react';

export default function PlayerInput({ onAddPlayers }) {
  const [names, setNames] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const playerNames = names.split(',').map((name) => name.trim());
    onAddPlayers(playerNames);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>הכניסו שמות המשתתפים (מופרדים בפסיקים)</h1>
      <input
        type="text"
        value={names}
        onChange={(e) => setNames(e.target.value)}
        placeholder="לדוגמה: יוסי, שרה, דני"
      />
      <button type="submit">התחל משחק</button>
    </form>
  );
}
