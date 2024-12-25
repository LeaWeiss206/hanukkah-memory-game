import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlayer } from "../redux/actions/gameActions";
import ListGroup from 'react-bootstrap/ListGroup';


function PlayerForm() {
    const [name, setName] = useState("");
    const players = useSelector((state) => state.players);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            dispatch(addPlayer(name));
            setName("");
        }
    };

    return (
        <>
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

            <div className="mt-4">
                <h3>:שחקנים </h3>
                <ListGroup>

                    {players.map((player, index) => (
                        <ListGroup.Item action variant="dark" key={index}>
                            {player.name}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
        </>
    );
}

export default PlayerForm;
