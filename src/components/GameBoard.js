import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import { revealCard, addPoint, nextPlayer, matchCards, hideCards, } from "../redux/actions/gameActions";

const GameBoard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [gameStarted, setGameStarted] = useState(false);
    const cards = useSelector((state) => state.cards);
    const players = useSelector((state) => state.players);
    const currentPlayerIndex = useSelector((state) => state.currentPlayerIndex);
    const [gameOver, setGameOver] = useState(false);



    const checkGameOver = () => {
        const allMatched = cards.every((card) => card.matched); // אם כל הקלפים תואמים
        var winner;
        if (allMatched) {
            if (players.length === 0) {
                winner = "אף אחד"
                return;
            }
            else{
            const maxPoints = Math.max(...players.map((player) => player.points));
            console.log(maxPoints);
            const winners = players.filter((player) => player.points === maxPoints);
            console.log(winners);
            if (winners.length === 1) {
                winner = winners[0].name; 
                console.log(winner);
            } else {
                winner = winners.map((player) => player.name).join(", ");
                console.log(winner);
            }
            }
           
            setGameOver(true); 
            navigate(`/winner/${winner}`);
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
                    dispatch(nextPlayer());
                }, 500);
            } else {
                // אם אין התאמה, להסתיר את הקלפים שוב
                setTimeout(() => {
                    dispatch(hideCards([firstCard.id, id]));
                    dispatch(nextPlayer());
                }, 1000);
            }
        }
    };
    useEffect(() => {
        checkGameOver();
    }, [cards]); // הפונקציה תופעל רק כשהערך של cards משתנה
    

    if (!gameStarted)
        return (
            <button onClick={() => setGameStarted(true)} className="btn btn-success mt-3">
                התחל משחק
            </button>
        );
    else
        return (
            <div>
                <h2>התור של {players[currentPlayerIndex]?.name || "שחקן לא ידוע"}</h2>
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
