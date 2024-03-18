import BoardState from "../models/BoardState";
import { ROW_COUNT } from "./constants";
import hasShapeUnder from "./hasShapeUnder";

export default function setGhostShapeRow(newState: BoardState) {
    const stateCopy = { ...newState }
    for (let i = newState.droppingRow; i < ROW_COUNT; i++) {
        stateCopy.droppingRow = i
        if (hasShapeUnder(stateCopy)) {
            newState.ghostPieceRow = i
            break
        }
    }
}