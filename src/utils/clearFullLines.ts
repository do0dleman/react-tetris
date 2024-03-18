import BoardState from "../models/BoardState";
import { COL_COUNT } from "./constants";

export default function clearFullLines(newState: BoardState) {
    const clearedRows: number[] = []
    const newBoard = JSON.parse(JSON.stringify(newState.board))

    newState.board.forEach((row, i) => {
        const filteredRow = row.filter(cell => cell != null) // JSON.parse turns undefined into null wtf?
        if (filteredRow.length === COL_COUNT) {
            clearedRows.push(i)
        }
    })

    clearedRows.forEach(rowIndex => {
        const prevBoard = JSON.parse(JSON.stringify(newBoard))
        const emptyRow = []
        for (let i = 0; i < COL_COUNT; i++) {
            emptyRow.push(undefined)
        }
        for (let i = 0; i < rowIndex; i++) {
            newBoard[i + 1] = prevBoard[i]
        }
        newBoard[0] = emptyRow
    })
    newState.score += clearedRows.length * 100
    newState.linesCleared += clearedRows.length
    return newBoard
}