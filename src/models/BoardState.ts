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
    nextDroppingShapeType: ShapeType
    droppingShape: boolean[][]
    isGameOver: boolean
    isStarted: boolean
    isSpeedUp: boolean
    score: number
    linesCleared: number
    linesClearedBeforeLevel: number
    level: number
    lastInputTime: Date
}

const initialBoardState = ({
    board: [[], []],
    droppingRow: 2,
    droppingCol: 3,
    ghostPieceRow: 20,
    droppingShapeType: 'I' as keyof typeof SHAPES,
    nextDroppingShapeType: 'I' as keyof typeof SHAPES,
    droppingShape: JSON.parse(JSON.stringify(SHAPES['I'])),
    isGameOver: false,
    isStarted: true,
    isSpeedUp: false,
    score: 0,
    linesCleared: 0,
    linesClearedBeforeLevel: 0,
    level: 5,
    lastInputTime: new Date(),
}) as BoardState

export { initialBoardState }
export default BoardState