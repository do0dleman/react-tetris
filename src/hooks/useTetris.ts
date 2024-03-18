import { useEffect } from "react";
import useTetrisBoard from "./useTetrisBoard";
import { INITIAL_TICK_TIME } from "../utils/constants";
import BoardState, { BoardActions } from "../models/BoardState";

declare global {
    var lastKeyDownTime: Date
}

export default function useTetris() {
    const [boardState, dispatchBoard] = useTetrisBoard()

    useEffect(() => {
        const HadnleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowDown" && new Date().getTime() - window.lastKeyDownTime.getTime() < 100) {
                return
            }
            if (e.key === " ") {
                dispatchBoard("placeInstantly")
            }
            if (e.key === "ArrowLeft") {
                dispatchBoard("moveLeft")
            }
            if (e.key === "ArrowRight") {
                dispatchBoard("moveRight")
            }
            if (e.key === "ArrowUp") {
                dispatchBoard("roateRight")
            }
            if (e.key === "ArrowDown") {
                dispatchBoard("speedUpOn")
            }
            window.lastKeyDownTime = new Date()
        }
        const HadnleKeyUp = (e: KeyboardEvent) => {
            if (e.key === "ArrowDown") {
                dispatchBoard("speedUpOff")
            }
        }
        window.lastKeyDownTime = new Date()
        window.addEventListener("keydown", HadnleKeyDown)
        window.addEventListener("keyup", HadnleKeyUp)
        const tickTime = boardState.isSpeedUp ? 50 :
            INITIAL_TICK_TIME - Math.floor(boardState.linesCleared / 5) * 10

        const gameLoopId = setTimeout(() => {
            if (boardState.isGameOver) {
                clearInterval(gameLoopId)
                return
            }
            dispatchBoard("drop")
        }, tickTime)

        return () => {
            clearTimeout(gameLoopId)
            window.removeEventListener('keydown', HadnleKeyDown)
            window.removeEventListener("keyup", HadnleKeyUp)
        }
    }, [boardState])

    return [boardState, dispatchBoard] as [BoardState, React.Dispatch<BoardActions>]
}