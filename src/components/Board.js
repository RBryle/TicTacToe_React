import React, { useState } from 'react'
import Square from "./Square";

import calculateWinner from "../utils/calculateWinner";


const Board = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const [ squares, setSquares ] = useState(
        Array(9).fill(null)
    );

    let status;
    // let status = "Next Player: " + (xIsNext ? "X" : "O");

    const winner = calculateWinner(squares);

    if (winner) {
        status = "Winner: " + winner
    } else {
        status = "Next Player: " + (xIsNext ? "X" : "O");
    }


    const handleClick = (x) => {
        const allSquares = squares.slice();
        if (calculateWinner(allSquares) || squares[x]) {
            return;
        }


        allSquares[x] = xIsNext ? "X" : "O";
        
        setSquares(allSquares)
        setXIsNext(!xIsNext);
    };

    const renderSquare = (i) => {
        return (
            <Square                
                value={squares[i]}
                onClick={() => handleClick(i)}
            />
        )
    }     

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>

            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>

            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board
