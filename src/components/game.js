import Board from "./board";
import './style.css';

import { useState } from "react";

export default function Game() {

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);

    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares){
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);

    }

    return (
        <>
            <Board squares={currentSquares} onPlay={handlePlay} xIsNext={xIsNext}/>
        </>
    )

}