import { useReducer } from "react"
import { SHAPES } from "../models/shapes"
import generateGrid from "../utils/generateGrid"
import BoardState from "../models/BoardState"

export default function useTetrisBoard() {
    type BoardActions = "drop"

    function boardReducer(state: BoardState, action: BoardActions) {
        switch (action) {
            case "drop":
                return {
                    ...state,
                    droppingCol: state.droppingCol + 1
                }
            default:
                return state
        }
    }

    const initialState = {
        board: [[], []],
        droppingRow: 3,
        droppingCol: 5,
        droppingShape: 'I' as keyof typeof SHAPES,
    }

    function createInitialState() {
        return {
            ...initialState,
            board: generateGrid()
        }
    }

    const [boardState, dispatchBoard] = useReducer(boardReducer, initialState, createInitialState)

    return [boardState, dispatchBoard] as [BoardState, React.Dispatch<BoardActions>]
}