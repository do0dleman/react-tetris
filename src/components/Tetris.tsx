import { useEffect } from "react"
import Cell from "./Cell/Cell"
import useTetris from "../hooks/useTetris"
import BoardState from "../models/BoardState"

function Tetris() {
    const boardState = useTetris()
    // const boardState = {
    //     droppingCol: 3,
    //     droppingRow: 20,
    //     droppingShapeType: "I",
    //     droppingShape: SHAPES["I"],
    // board: [
    //     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    //     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    //     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    //     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    //     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    //     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    //     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    //     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    //     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    //     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    //     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    //     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    //     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    //     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    //     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    //     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    //     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    //     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    //     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    //     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    //     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    //     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    //     [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    //     [undefined, undefined, undefined, undefined, 'I', 'I', 'I', 'I', undefined, undefined],
    // ]
    // }

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
                    if (i - boardState.droppingRow >= 0 &&
                        i - boardState.droppingRow < 4 &&
                        j - boardState.droppingCol >= 0 &&
                        j - boardState.droppingCol < 4
                    ) {
                        const shape = boardState.droppingShape
                        if (shape[i - boardState.droppingRow][j - boardState.droppingCol] == true) {
                            cell = boardState.droppingShapeType
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