import { createStore } from "redux";
import { gameReducer } from "./reducers/gameReducer";

export const store = createStore(gameReducer);
