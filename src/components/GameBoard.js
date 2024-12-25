import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import Card from "./Card"; 
import {
  revealCard,
  addPoint,
  nextPlayer,
  matchCards,
  hideCards,
} from "../redux/actions/gameActions";

const GameBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cards = useSelector((state) => state.cards);
  const players = useSelector((state) => state.players);
  const currentPlayerIndex = useSelector((state) => state.currentPlayer);
  const [gameOver, setGameOver] = useState(false);
  


  const checkGameOver = () => {
    const allMatched = cards.every((card) => card.matched); // אם כל הקלפים תואמים
    if (allMatched) {
      const winner = players.reduce((prev, current) => {
        return prev.points > current.points ? prev : current;
      });
      setGameOver(true); // הצגת סיום המשחק
      navigate(`/winner/${winner.name}`);
    }
  };

  const handleCardClick = (id) => {
    const clickedCard = cards.find((card) => card.id === id);

    // אם הקלף כבר נחשף, לא לעשות כלום
    if (clickedCard.revealed) return;

    // חשיפת הקלף
    dispatch(revealCard(id));

    // בדיקת קלפים נחשפים
    const revealedCards = cards.filter(
      (card) => card.revealed && !card.matched
    );

    if (revealedCards.length === 1) {
      // אם זהו הקלף השני שנבחר, לבדוק התאמה
      const [firstCard] = revealedCards;

      if (firstCard.value === clickedCard.value) {
        // אם יש התאמה
        dispatch(addPoint()); 
        setTimeout(() => {
          dispatch(matchCards([firstCard.id, id]));
        }, 500);
        checkGameOver();
      } else {
        // אם אין התאמה, להסתיר את הקלפים שוב
        setTimeout(() => {
          dispatch(hideCards([firstCard.id, id]));
          dispatch(nextPlayer());
        }, 1000);
      }
    }
  };

  return (
    <div>
      <h2>תורו של {players[currentPlayerIndex]?.name || "שחקן לא ידוע"}</h2>
      <div className="row">
      {cards.map((card) => (
          <div key={card.id} className="col-3 mb-3">
            <Card
              card={card}
              onClick={() => handleCardClick(card.id)}
              flipped={card.revealed}
            />
          </div>
        ))}
      </div>
      </div>
  );
};

export default GameBoard;
