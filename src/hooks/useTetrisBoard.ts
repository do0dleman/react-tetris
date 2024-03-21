import { useMemo, useReducer } from "react"
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
import moveSound from "../sounds/move.mp3"
import placeSound from "../sounds/place.mp3"
import rotateSound from "../sounds/rotate.m4a"
import korobeinikiMusic from "../sounds/korobeiniki.mp3"
import clearLineSound from "../sounds/clearLine.mp3"

export default function useTetrisBoard() {
    const move = new Audio(moveSound)
    move.volume = 0.1
    const place = new Audio(placeSound)
    place.volume = 0.1
    const rotate = new Audio(rotateSound)
    rotate.volume = 0.1
    const clearLine = new Audio(clearLineSound)
    clearLine.volume = 0.5
    const bgMusic = useMemo(() => {
        const audio = new Audio(korobeinikiMusic)
        audio.volume = 0.3
        audio.loop = true
        return audio
    }, [])

    function boardReducer(state: BoardState, action: BoardActions) {
        const newState = { ...state }
        if (newState.isGameOver && action !== 'restart') {
            return newState
        }
        if (action === "toggleIsStart") {
            newState.isStarted = !newState.isStarted
            if (!newState.isStarted) bgMusic.pause()
            return newState
        }
        if (!newState.isStarted && action !== "restart"
            && action !== "toggleSFX") {
            return newState
        }

        switch (action) {
            case "toggleSFX":
                newState.isSFXon = !state.isSFXon
                if (newState.isSFXon) bgMusic.play()
                if (!newState.isSFXon) {
                    bgMusic.pause()
                    bgMusic.currentTime = 0
                }
                return newState
            case "restart": {
                bgMusic.currentTime = 0
                const newShapeType = generateRandomShape()
                return {
                    ...initialBoardState,
                    board: generateGrid(),
                    droppingShapeType: newShapeType,
                    droppingShape: JSON.parse(JSON.stringify(SHAPES[newShapeType!])),
                    nextDroppingShapeType: generateRandomShape()
                }
            }
            case "drop":
                if (state.isSFXon && bgMusic.paused) bgMusic.play()

                setGhostShapeRow(newState)
                if (hasShapeUnder(newState)) {
                    if (new Date().getTime() - newState.lastInputTime.getTime() < PLACE_TIME_AFTER_INPUT) {
                        return newState
                    }
                    setShapeOnBoard(newState)
                    if (state.isSFXon) place.play()
                    newState.isGameOver = isGameOver(newState)
                    newState.board = clearFullLines(newState, clearLine)
                    if (!newState.isGameOver) {
                        newState.droppingShapeType = state.nextDroppingShapeType
                        newState.nextDroppingShapeType = generateRandomShape()
                        newState.droppingShape = JSON.parse(JSON.stringify(SHAPES[state.nextDroppingShapeType!]))
                        newState.droppingCol = 3
                        newState.droppingRow = 2
                    }
                }
                newState.lastDropTime = new Date()
                newState.droppingRow++
                return newState
            case "placeInstantly":
                newState.score += newState.droppingRow
                newState.droppingRow = state.ghostPieceRow
                setShapeOnBoard(newState)
                if (state.isSFXon) place.play()
                newState.isGameOver = isGameOver(newState)
                newState.board = clearFullLines(newState, clearLine)
                if (!newState.isGameOver) {
                    newState.droppingShapeType = state.nextDroppingShapeType
                    newState.nextDroppingShapeType = generateRandomShape()
                    newState.droppingShape = JSON.parse(JSON.stringify(SHAPES[state.nextDroppingShapeType!]))
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
                if (state.isSFXon) move.play()
                return newState
            case "moveRight":
                newState.lastInputTime = new Date()
                newState.droppingCol++
                if (doesIntersectGridBorder(newState)) {
                    newState.droppingCol--
                }
                if (state.isSFXon) move.play()
                return newState
            case "roateRight": {
                newState.lastInputTime = new Date()
                const prevShape = JSON.parse(JSON.stringify(newState.droppingShape))
                rotate2dArrayRight(newState.droppingShape)
                if (doesIntersectGridBorder(newState)) {
                    newState.droppingShape = prevShape
                    return newState
                }
                if (state.isSFXon) rotate.play()
                return newState
            }
            default:
                return newState
        }
    }


    function createInitialState() {
        const initialShapeType = generateRandomShape()
        return {
            ...initialBoardState,
            droppingShapeType: initialShapeType,
            droppingShape: SHAPES[initialShapeType!],
            nextDroppingShapeType: generateRandomShape(),
            board: generateGrid()
        } as BoardState
    }

    const [boardState, dispatchBoard] = useReducer(boardReducer, initialBoardState, createInitialState)

    return [boardState, dispatchBoard] as [BoardState, React.Dispatch<BoardActions>]
}