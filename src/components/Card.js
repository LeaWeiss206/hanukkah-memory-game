import React from 'react';

const Card = ({ card, onClick, flipped }) => {
  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={onClick}>
      {flipped ? card.value : '❓'}
    </div>
  );
};

export default Card;
