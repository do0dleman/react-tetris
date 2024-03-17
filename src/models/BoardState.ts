import { ShapeType } from "./shapes"

type BoardState = {
    board: ShapeType[][],
    droppingRow: number,
    droppingCol: number,
    droppingShape: ShapeType
}

export default BoardState