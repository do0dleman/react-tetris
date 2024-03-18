import BoardState from "../models/BoardState"

export default function setShapeOnBoard(newState: BoardState) {
    const shape = newState.droppingShape
    shape.forEach((row, i) => row.forEach((cell, j) => {
        if (!cell) return

        const shapeY = i + newState.droppingRow
        const shapeX = j + newState.droppingCol
        newState.board[shapeY][shapeX] = newState.droppingShapeType
    }))
    // return newState
}