import './style.css'

import Square from './square.js';


export default function Board(props) { 

    return (
        <>
            <div className="board-row">
                <Square value={props.squares[0]} handleClick={() => props.handleClick(0)}/>
                <Square value={props.squares[1]} handleClick={() => props.handleClick(1)}/>
                <Square value={props.squares[2]} handleClick={() => props.handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={props.squares[3]} handleClick={() => props.handleClick(3)}/>
                <Square value={props.squares[4]} handleClick={() => props.handleClick(4)}/>
                <Square value={props.squares[5]} handleClick={() => props.handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={props.squares[6]} handleClick={() => props.handleClick(6)}/>
                <Square value={props.squares[7]} handleClick={() => props.handleClick(7)}/>
                <Square value={props.squares[8]} handleClick={() => props.handleClick(8)}/>
            </div>
        </>
    )
} 