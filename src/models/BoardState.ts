import { ShapeType } from "./shapes"

type BoardState = {
    board: ShapeType[][],
    droppingRow: number,
    droppingCol: number,
    droppingShapeType: ShapeType
    droppingShape: boolean[][]
}

export default BoardState