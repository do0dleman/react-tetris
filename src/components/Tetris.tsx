import { useEffect } from "react"
import Cell from "./Cell/Cell"
import useTetris from "../hooks/useTetris"
import BoardState from "../models/BoardState"
import { SHAPES } from "../models/shapes"

function Tetris() {
    const boardState = useTetris()

    function drawGrid(boardState: BoardState) {
        const cells = boardState.board
        if (cells === undefined) {
            return
        }
        return cells.map((row, i) => {
            if (i <= 4) {
                return
            }
            return (<>
                {row.map((cell, j) => {
                    if (i - boardState.droppingCol >= 0 &&
                        i - boardState.droppingCol < 4 &&
                        j - boardState.droppingRow >= 0 &&
                        j - boardState.droppingRow < 4
                    ) {
                        const shape = SHAPES[boardState.droppingShape!]
                        if (shape[i - boardState.droppingCol][j - boardState.droppingRow] == true) {
                            cell = boardState.droppingShape
                        }
                    }
                    return <Cell ShapeType={cell} key={`${i}${j}`} />
                })}
            </>)
        })
    }

    useEffect(() => {

    }, [])

    return (
        <div className="grid grid-cols-10 border w-fit">
            {drawGrid(boardState)}
        </div>
    )
}
export default Tetris