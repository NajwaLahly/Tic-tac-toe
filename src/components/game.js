import Board from "./board";
import './style.css';

import { useState } from "react";

export default function Game() {

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);
    const [currentMove, setCurrentMove] = useState(0);

    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext);

    }

    function jumpTo(nextMove) {
        setXIsNext(nextMove % 2 === 0);
        setCurrentMove(nextMove);
    }

    const moves = history.map(
        (squares, move) => {
            let description = move > 0 ? "Go to move #" + move : "Go to game start";
            return (<li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
            )
        }
    );



    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );

}