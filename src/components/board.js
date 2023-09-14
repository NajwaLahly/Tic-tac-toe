import './style.css'

import Square from './square.js';
import { useState } from 'react';


export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function onSquareClick(index){
        if (squares[index]) {
            return;
        }
        const nextSquares = squares.slice();
        nextSquares[index] = xIsNext ? "X" : "O";

        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    return (
        <>
            <div className="board-row">
                <Square value={squares[0]} handleClick={() => onSquareClick(0)}/>
                <Square value={squares[1]} handleClick={() => onSquareClick(1)}/>
                <Square value={squares[2]} handleClick={() => onSquareClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} handleClick={() => onSquareClick(3)}/>
                <Square value={squares[4]} handleClick={() => onSquareClick(4)}/>
                <Square value={squares[5]} handleClick={() => onSquareClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} handleClick={() => onSquareClick(6)}/>
                <Square value={squares[7]} handleClick={() => onSquareClick(7)}/>
                <Square value={squares[8]} handleClick={() => onSquareClick(8)}/>
            </div>
        </>
    )
} 