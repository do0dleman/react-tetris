import { ShapeType } from "../models/shapes"
import { COL_COUNT, ROW_COUNT } from "./constants"

export default function generateGrid() {

    const newCells: ShapeType[][] = []
    for (let i = 0; i < ROW_COUNT; i++) {
        newCells.push([])
        for (let j = 0; j < COL_COUNT; j++) {
            newCells[i][j] = undefined
        }
    }
    return newCells
}