import React, { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import Scoreboard from './components/Scoreboard';


const App = () => {
  const [players, setPlayers] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [newGameStarted, setNewGameStarted] = useState(false);

  const startNewGame = (playerNames) => {
    setPlayers(playerNames);
    setGameOver(false);
    setWinner(null);
    setNewGameStarted(true);
  };

  return (
    <div className="app">
      {!newGameStarted ? (
        <div className="start-game">
          <h1>הכנס את שמות השחקנים</h1>
          <PlayersForm onStartGame={startNewGame} />
        </div>
      ) : !gameOver ? (
        <GameBoard players={players} onGameOver={setGameOver} setWinner={setWinner} />
      ) : (
        <Scoreboard winner={winner} onNewGame={startNewGame} />
      )}
    </div>
  );
};

const PlayersForm = ({ onStartGame }) => {
  const [playerNames, setPlayerNames] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      setPlayerNames((prevNames) => [...prevNames, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleStartGame = () => {
    if (playerNames.length >= 2) {
      onStartGame(playerNames);
    } else {
      alert('נא להכניס לפחות שני שחקנים');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="הכנס שם שחקן"
        />
        <button type="submit">הוסף שחקן</button>
      </form>
      <div>
        <h2>שחקנים:</h2>
        <ul>
          {playerNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleStartGame}>התחל משחק</button>
    </div>
  );
};

export default App;