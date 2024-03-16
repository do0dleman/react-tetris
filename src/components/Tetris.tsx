import { useEffect, useReducer, useState } from "react"
import Cell from "./Cell"

function Tetris() {
    const ROW_COUNT = 24
    const COL_COUNT = 10
    // const [cells, setCells] = useState(() => generateGrid())
    

    function generateGrid() {
        let newCells: React.ReactNode[][] = []
        for (let i = 0; i < ROW_COUNT; i++) {
            newCells.push([])
            for (let j = 0; j < COL_COUNT; j++) {
                newCells[i][j] = <Cell key={`${i}${j}`} />
            }
        }
        return newCells
    }

    function drawGrid(cells: React.ReactNode[][]) {
        return cells.map((row, i) => {
            if (i <= 4) {
                return
            }
            return (
                // <div className="flex">
                <>
                    {row.map((cell) => {
                        return cell
                    })}
                </>
                // </div>
            )
        })
    }

    useEffect(() => {

    }, [])

    return (
        <div className="grid grid-cols-10 border w-fit">
            {drawGrid(cells)}
        </div>
    )
}
export default Tetris