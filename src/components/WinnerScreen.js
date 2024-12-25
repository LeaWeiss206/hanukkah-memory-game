import React from "react";
import { useParams } from "react-router-dom";

const WinnerScreen = () => {
  const { winnerName } = useParams(); // קבלת שם המנצח מה-URL

  return (
    <div className="winner-screen">
      <h1>🎉 המשחק נגמר🎉</h1>
      {winnerName.includes(",") ? " המנצחים הם" : " המנצח הוא"} {winnerName}
    </div>
  );
};

export default WinnerScreen;
