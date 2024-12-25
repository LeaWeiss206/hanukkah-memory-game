import React, { useState, useEffect } from 'react';
import Card from './Card';

const GameBoard = ({ players, onGameOver, setWinner }) => {
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [scores, setScores] = useState(
    players.reduce((acc, player) => {
      acc[player] = 0;
      return acc;
    }, {})
  );

  const flipCard = (index) => {
    if (flippedCards.length < 2 && !flippedCards.includes(index)) {
      const newFlippedCards = [...flippedCards, index];
      setFlippedCards(newFlippedCards);

      if (newFlippedCards.length === 2) {
        const [firstIndex, secondIndex] = newFlippedCards;
        if (cards[firstIndex].value === cards[secondIndex].value) {
          const newScores = { ...scores };
          newScores[players[currentPlayerIndex]] += 1;
          setScores(newScores);
        }

        setTimeout(() => {
          setFlippedCards([]);
          setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    const isGameOver = cards.every((card, index) => flippedCards.includes(index));
    if (isGameOver) {
      const maxScore = Math.max(...Object.values(scores));
      const winnerPlayer = Object.keys(scores).find(player => scores[player] === maxScore);
      if (winnerPlayer) {
        setWinner(winnerPlayer);
        onGameOver(true);
      }
    }
  }, [flippedCards, cards, scores, onGameOver, players, setWinner]);

  return (
    <div className="game-board">
      {cards.map((card, index) => (
        <Card key={index} card={card} onClick={() => flipCard(index)} flipped={flippedCards.includes(index)} />
      ))}
    </div>
  );
};

const generateCards = () => {
  const values = ['🕎', '🕎', '💡', '💡', '🎉', '🎉', '✡️', '✡️']; // Example symbols for Hanukkah
  const shuffledCards = values
    .map((value) => ({ value, id: Math.random() }))
    .sort(() => Math.random() - 0.5);
  return shuffledCards;
};

export default GameBoard;
