import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayerForm from "./components/PlayerForm";
import GameBoard from "./components/GameBoard";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import WinnerScreen from "./components/WinnerScreen";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <h1>משחק זיכרון חנוכה</h1>
        <Routes>
          <Route path="/" element={<GameBoard />} />
          <Route
            path="/winner/:winnerName"
            element={<WinnerScreen />}
          />
        </Routes>
        <PlayerForm />
      </Router>
    </Provider>
  );
}

export default App;