import BoardState from "../models/BoardState";
import { ROW_COUNT } from "./constants";

export default function hasShapeUnder(newState: BoardState) {
    const shape = newState.droppingShape
    // console.log(shape)
    let hasUnder = false

    shape.every((row, i) => {
        if (hasUnder) return false

        row.every((cell, j) => {
            if (hasUnder) return false
            if (!cell) return true

            const shapeX = j + newState.droppingCol
            const shapeY = i + newState.droppingRow

            if (shapeY + 1 >= ROW_COUNT) {
                hasUnder = true
                return false
            }

            if (newState.board[shapeY + 1][shapeX] != undefined) {
                hasUnder = true
                return false
            }
            return true
        })
        return true
    })
    return hasUnder
}