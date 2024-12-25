const initialState = {
    players: [],
    currentPlayerIndex: 0,
    cards: [{id: 1,value:1,showVal:"ברכי ושירה",revealed: false,matched: false }, 
        {id: 2,value:2,showVal:"🕯️",revealed: false, matched: false }, 
        {id: 3, value:3,showVal:"🔥",revealed: false,matched: false  }, 
        {id: 4,value:4,showVal:"🔥",revealed: false,matched: false }, 
        {id:9, value:3,showVal:"🔥",revealed: false,matched: false  },
        {id: 11,value:5,showVal:"🕎",revealed: false,matched: false },
        {id: 10,value:4,showVal:"🔥",revealed: false,matched: false }, 
        {id:12 ,value:6,showVal:"🕎",revealed: false, matched: false },
        {id: 5,value:5,showVal:"🕎",revealed: false,matched: false },
        {id: 7,value:2,showVal:"🕯️",revealed: false, matched: false }, 
        {id:6 ,value:6,showVal:"🕎",revealed: false, matched: false },
        {id: 8,value:1,showVal:"נתקעו במעלית ב M & S",revealed: false,matched: false }],
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
            debugger
            return {
                ...state,
                players: state.players.map((player, index) =>
                    index === state.currentPlayerIndex
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
