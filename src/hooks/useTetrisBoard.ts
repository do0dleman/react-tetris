import { useReducer } from "react"
import { SHAPES } from "../models/shapes"
import generateGrid from "../utils/generateGrid"
import BoardState, { BoardActions, initialBoardState } from "../models/BoardState"
import hasShapeUnder from "../utils/hasShapeUnder"
import setShapeOnBoard from "../utils/setShapeOnBoard"
import generateRandomShape from "../utils/generateRandomShape"
import doesIntersectGridBorder from "../utils/doesIntersectGridBorder"
import rotate2dArrayRight from "../utils/rotate2dArrayRight"
import isGameOver from "../utils/isGameOver"
import clearFullLines from "../utils/clearFullLines"
import { PLACE_TIME_AFTER_INPUT } from "../utils/constants"
import setGhostShapeRow from "../utils/setGhostShapeRow"

export default function useTetrisBoard() {

    function boardReducer(state: BoardState, action: BoardActions) {
        const newState = { ...state }
        if (newState.isGameOver && action !== 'restart') {
            return newState
        }
        if (action === "toggleIsStart") {
            newState.isStarted = !newState.isStarted
            return newState
        }
        if (!newState.isStarted) {
            return newState
        }

        switch (action) {
            case "restart":
                const newShapeType = generateRandomShape()
                return {
                    ...initialBoardState,
                    board: generateGrid(),
                    droppingShapeType: newShapeType,
                    droppingShape: JSON.parse(JSON.stringify(SHAPES[newShapeType!]))

                }
            case "drop":
                setGhostShapeRow(newState)
                if (hasShapeUnder(newState)) {
                    if (new Date().getTime() - newState.lastInputTime.getTime() < PLACE_TIME_AFTER_INPUT) {
                        return newState
                    }
                    setShapeOnBoard(newState)
                    newState.isGameOver = isGameOver(newState)
                    newState.board = clearFullLines(newState)
                    if (!newState.isGameOver) {
                        newState.droppingShapeType = generateRandomShape()
                        newState.droppingShape = JSON.parse(JSON.stringify(SHAPES[newState.droppingShapeType!]))
                        newState.droppingCol = 3
                        newState.droppingRow = 2
                    }
                }
                newState.droppingRow++
                return newState
            case "placeInstantly":
                newState.droppingRow = state.ghostPieceRow
                setShapeOnBoard(newState)
                newState.isGameOver = isGameOver(newState)
                newState.board = clearFullLines(newState)
                if (!newState.isGameOver) {
                    newState.droppingShapeType = generateRandomShape()
                    newState.droppingShape = JSON.parse(JSON.stringify(SHAPES[newState.droppingShapeType!]))
                    newState.droppingCol = 3
                    newState.droppingRow = 3
                }
                return newState
            case "speedUpOn":
                newState.isSpeedUp = true
                return newState
            case "speedUpOff":
                newState.isSpeedUp = false
                return newState
            case "moveLeft":
                newState.lastInputTime = new Date()
                newState.droppingCol--
                if (doesIntersectGridBorder(newState)) {
                    newState.droppingCol++
                }
                return newState
            case "moveRight":
                newState.lastInputTime = new Date()
                newState.droppingCol++
                if (doesIntersectGridBorder(newState)) {
                    newState.droppingCol--
                }
                return newState
            case "roateRight":
                newState.lastInputTime = new Date()
                const prevShape = JSON.parse(JSON.stringify(newState.droppingShape))
                rotate2dArrayRight(newState.droppingShape)
                if (doesIntersectGridBorder(newState)) {
                    newState.droppingShape = prevShape
                }
                return newState
            default:
                return newState
        }
    }


    function createInitialState() {
        return {
            ...initialBoardState,
            board: generateGrid()
        }
    }

    const [boardState, dispatchBoard] = useReducer(boardReducer, initialBoardState, createInitialState)

    return [boardState, dispatchBoard] as [BoardState, React.Dispatch<BoardActions>]
}