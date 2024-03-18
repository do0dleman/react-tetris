import BoardState from "../models/BoardState";
import { HIDDEN_ROW_COUNT } from "./constants";

export default function isGameOver(newState: BoardState) {
    for (let i = 0; i < HIDDEN_ROW_COUNT; i++) {
        const trueCells = newState.board[i].filter(cell => cell)

        if (trueCells.length !== 0) {
            return true
        }
    }
    return false
}