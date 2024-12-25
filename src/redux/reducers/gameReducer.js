const initialState = {
    players: [],
    currentPlayerIndex: 0,
    cards: [{id: 1,value:"🕯️",revealed: false,matched: false }, {id: 2,value:"🕯️",revealed: false, matched: false }, {id: 3, value:"🔥",revealed: false,matched: false  }, {id: 4,value:"🔥",revealed: false,matched: false }, 
        {id: 5,value:"🕎",revealed: false,matched: false }, {id:6 ,value:"🕎",revealed: false, matched: false }],
};

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case "MATCH_CARDS":
            return {
                ...state,
                cards: state.cards.map((card) =>
                    action.payload.includes(card.id)
                        ? { ...card, matched: true }
                        : card
                ),
            };

        case "HIDE_CARDS":
            return {
                ...state,
                cards: state.cards.map((card) =>
                    action.payload.includes(card.id)
                        ? { ...card, revealed: false }
                        : card
                ),
            };

        case "ADD_POINT":
            return {
                ...state,
                players: state.players.map((player, index) =>
                    index === state.currentPlayer
                        ? { ...player, points: player.points + 1 }
                        : player
                ),
            };

        case "ADD_PLAYER":
            return {
                ...state,
                players: [...state.players, { name: action.payload, points: 0 }],
            };

        case "REVEAL_CARD":
            return {
                ...state,
                cards: state.cards.map((card) =>
                    card.id === action.payload ? { ...card, revealed: true } : card
                ),
            };

        case "NEXT_PLAYER":
            return {
                ...state,
                currentPlayerIndex:
                    (state.currentPlayerIndex + 1) % state.players.length,
            };

        default:
            return state;
    }
};
