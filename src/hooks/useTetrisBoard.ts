import { useReducer } from "react"
import { SHAPES } from "../models/shapes"
import generateGrid from "../utils/generateGrid"
import BoardState from "../models/BoardState"
import hasShapeUnder from "../utils/hasShapeUnder"
import setShapeOnBoard from "../utils/setShapeOnBoard"
import generateRandomShape from "../utils/generateRandomShape"
import doesIntersectGridBorder from "../utils/doesIntersectGridBorder"
import rotate2dArrayRight from "../utils/rotate2dArrayRight"

export default function useTetrisBoard() {
    type BoardActions = "drop" | "moveLeft" | "moveRight" | "roateRight"

    function boardReducer(state: BoardState, action: BoardActions) {
        const newState = { ...state }
        switch (action) {
            case "drop":
                if (hasShapeUnder(newState)) {
                    setShapeOnBoard(newState)
                    newState.droppingShapeType = generateRandomShape()
                    newState.droppingShape = JSON.parse(JSON.stringify(SHAPES[newState.droppingShapeType!]))
                    newState.droppingCol = 3
                    newState.droppingRow = 0
                }
                newState.droppingRow++
                return newState
            case "moveLeft":
                newState.droppingCol--
                if (doesIntersectGridBorder(newState)) {
                    newState.droppingCol++
                }
                return newState
            case "roateRight":
                const prevShape = JSON.parse(JSON.stringify(newState.droppingShape))
                rotate2dArrayRight(newState.droppingShape)
                if (doesIntersectGridBorder(newState)) {
                    newState.droppingShape = prevShape
                }
                return newState
            case "moveRight":
                newState.droppingCol++
                if (doesIntersectGridBorder(newState)) {
                    newState.droppingCol--
                }
                return newState
            default:
                return newState
        }
    }
    const rot = JSON.parse(JSON.stringify(SHAPES['I']))
    rotate2dArrayRight(rot)

    const initialState = ({
        board: [[], []],
        droppingRow: 0,
        droppingCol: 3,
        droppingShapeType: 'I' as keyof typeof SHAPES,
        droppingShape: rot
    }) as BoardState

    function createInitialState() {
        return {
            ...initialState,
            board: generateGrid()
        }
    }

    const [boardState, dispatchBoard] = useReducer(boardReducer, initialState, createInitialState)

    return [boardState, dispatchBoard] as [BoardState, React.Dispatch<BoardActions>]
}