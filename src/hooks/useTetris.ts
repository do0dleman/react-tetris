import { useReducer } from "react"

export function useTetris() {
    type BoardState = {
        board: [],
        droppingRow: 0,
        droppingCol: 0,
    }
    function boardReducer(state: BoardState, action: string) {
        return state
    }

    const [boardState, dispatchBoard] = useReducer(boardReducer, {
        board: [],
        droppingRow: 0,
        droppingCol: 0,
        droppingFig:
    })
}