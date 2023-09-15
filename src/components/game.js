import Board from "./board";
import { useState } from "react";
import './style.css';

export default function Game() {

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);
    const [status, setStatus] = useState('Next player is : X');

    function onSquareClick(index){

        const newSquares = history[history.length - 1].slice();


        if (calculateWinner(newSquares) || !newSquares.includes(null) || newSquares[index]){
            return;
        }
        
        newSquares[index] = xIsNext ? "X" : "O";
        const nextHistory = [...history, newSquares];

        console.log(nextHistory);

        setHistory(nextHistory);


        if(!newSquares.includes(null)){
            setStatus("Game is over")
            return;
        }

        const winner = calculateWinner(newSquares);
        if (winner){
            setStatus('Winner is : ' + winner);
            return;
        }

        const newPlayer = !xIsNext;

        setXIsNext(newPlayer);
        setStatus(newPlayer? 'Next player is : X' : 'Next player is : O');
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
            <Board squares={history[history.length-1]} handleClick={onSquareClick}/>
        </>
    )
}