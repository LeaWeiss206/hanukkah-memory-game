import React from 'react';

const Card = ({ card, onClick, flipped }) => {
  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={onClick}>
      {flipped ? card.showVal : '❓'}
    </div>
  );
};

export default Card;
