import { useEffect } from "react";
import useTetrisBoard from "./useTetrisBoard";
import { GAME_TICK_DELAY } from "../utils/constants";

export default function useTetris() {
    const [boardState, dispatchBoard] = useTetrisBoard()

    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            if (e.key === "ArrowLeft") {
                dispatchBoard("moveLeft")
            }
            if (e.key === "ArrowRight") {
                dispatchBoard("moveRight")
            }
            if (e.key === "r") {
                dispatchBoard("roateRight")
            }
            console.log(e.key)
        })
        const gameLoopId = setInterval(() => {
            dispatchBoard("drop")
        }, GAME_TICK_DELAY)

        return () => clearInterval(gameLoopId)
    }, [])

    return boardState
}