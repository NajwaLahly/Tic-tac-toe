import './style.css'

import Square from './square.js';
import { useState } from "react";


export default function Board({ squares, onPlay, xIsNext }) {

    const [status, setStatus] = useState('Next player is : X');

    function onSquareClick(index) {
        if (calculateWinner(squares) || !squares.includes(null) || squares[index]) {
            return;
        }
        const newSquares = squares.slice();
        newSquares[index] = xIsNext ? "X" : "O";

        onPlay(newSquares);

        if (!newSquares.includes(null)) {
            setStatus("Game is over")
            return;
        }

        const winner = calculateWinner(newSquares);
        if (winner) {
            setStatus('Winner is : ' + winner);
            return;
        }
        setStatus(xIsNext ? 'Next player is : O' : 'Next player is : X');
    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }


    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} handleClick={() => onSquareClick(0)} />
                <Square value={squares[1]} handleClick={() => onSquareClick(1)} />
                <Square value={squares[2]} handleClick={() => onSquareClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} handleClick={() => onSquareClick(3)} />
                <Square value={squares[4]} handleClick={() => onSquareClick(4)} />
                <Square value={squares[5]} handleClick={() => onSquareClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} handleClick={() => onSquareClick(6)} />
                <Square value={squares[7]} handleClick={() => onSquareClick(7)} />
                <Square value={squares[8]} handleClick={() => onSquareClick(8)} />
            </div>
        </>


    )
} 