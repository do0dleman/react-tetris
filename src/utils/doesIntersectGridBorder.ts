import BoardState from "../models/BoardState";
import { COL_COUNT, ROW_COUNT } from "./constants";

export default function doesIntersectGridBorder(newState: BoardState) {
    const shape = newState.droppingShape

    return !shape.every((row, i) => {
        return row.every((cell, j) => {
            if (!cell) return true
            const shapeX = j + newState.droppingCol
            const shapeY = i + newState.droppingRow

            if (newState.board[shapeY][shapeX] !== undefined) {
                return false
            }

            if (shapeX < 0 || shapeX > COL_COUNT - 1) {
                return false
            }
            if (shapeY < 0 || shapeY > ROW_COUNT - 1) {
                return false
            }

            return true
        })
    })
}