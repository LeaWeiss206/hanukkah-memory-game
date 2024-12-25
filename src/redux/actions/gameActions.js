export const addPlayer = (name) => ({
    type: "ADD_PLAYER",
    payload: name,
  });
  
export const revealCard = (id) => ({
  type: "REVEAL_CARD",
  payload: id,
});

export const matchCards = (ids) => ({
  type: "MATCH_CARDS",
  payload: ids,
});

export const hideCards = (ids) => ({
  type: "HIDE_CARDS",
  payload: ids,
});

export const addPoint = () => ({
  type: "ADD_POINT",
});

export const nextPlayer = () => ({
  type: "NEXT_PLAYER",
});
