import { useEffect } from "react";
import useTetrisBoard from "./useTetrisBoard";
import { GAME_TICK_DELAY } from "../utils/constants";

export default function useTetris() {
    const [boardState, dispatchBoard] = useTetrisBoard()

    useEffect(() => {
        const gameLoopId = setInterval(() => {
            dispatchBoard("drop")
        }, GAME_TICK_DELAY)

        return () => clearInterval(gameLoopId)
    }, [])

    return boardState
}