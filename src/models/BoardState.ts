import { SHAPES, ShapeType } from "./shapes"

export type BoardActions = "drop" | "moveLeft" | "moveRight" |
    "roateRight" | "speedUpOn" | "speedUpOff" | "toggleIsStart" |
    "restart" | "placeInstantly"

type BoardState = {
    board: ShapeType[][],
    droppingRow: number,
    droppingCol: number,
    ghostPieceRow: number,
    droppingShapeType: ShapeType
    droppingShape: boolean[][]
    isGameOver: boolean
    isStarted: boolean
    isSpeedUp: boolean
    score: number
    linesCleared: number
    lastInputTime: Date
}

const initialBoardState = ({
    board: [[], []],
    droppingRow: 2,
    droppingCol: 3,
    ghostPieceRow: 20,
    droppingShapeType: 'I' as keyof typeof SHAPES,
    droppingShape: JSON.parse(JSON.stringify(SHAPES['I'])),
    isGameOver: false,
    isStarted: true,
    isSpeedUp: false,
    score: 0,
    linesCleared: 0,
    lastInputTime: new Date(),
}) as BoardState

export { initialBoardState }
export default BoardState