import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlayer } from "../redux/actions/gameActions";

function PlayerForm() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch(addPlayer(name));
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="הכנס שם שחקן"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
      />
      <button type="submit" className="btn btn-primary mt-2">
        הוסף שחקן
      </button>
    </form>
  );
}

export default PlayerForm;
