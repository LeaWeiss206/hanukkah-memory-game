import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const WinnerScreen = () => {
  const { winnerName } = useParams(); // קבלת שם המנצח מה-URL
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate("/"); // חזרה לעמוד הבית (המשחק)
  };

  return (
    <div className="winner-screen">
      <h1>🎉 ברכות למנצח! 🎉</h1>
      <h2>המשחק הוכרז על ידי: {winnerName}</h2>
      <button onClick={handleRestart} className="btn btn-primary">
        התחל משחק חדש
      </button>
    </div>
  );
};

export default WinnerScreen;
