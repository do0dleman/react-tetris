import Cell from "./Cell/Cell"
import useTetris from "../hooks/useTetris"
import BoardState from "../models/BoardState"
import { HIDDEN_ROW_COUNT } from "../utils/constants"
import { FaPlay } from "react-icons/fa6"
import { FaArrowRotateLeft } from "react-icons/fa6";
import { ShapeType } from "../models/shapes"
import setGhostShapeRow from "../utils/setGhostShapeRow"
import { createRef } from "react"
import NextPiece from "./NextPiece"
import Score from "./Score"
import Level from "./Level"
import LinesCleared from "./LinesCleared"
import Controls from "./Controls"

function Tetris() {
    const [boardState, dispatchBoardAction] = useTetris()
    const StartBtnRef = createRef<HTMLButtonElement>()
    const RestartBtnRef = createRef<HTMLButtonElement>()

    // const boardState = {
    //     ...initialBoardState,
    //     board: generateGrid()
    // }
    setGhostShapeRow(boardState)

    function drawGrid(boardState: BoardState) {
        const cells = boardState.board
        if (cells === undefined) {
            return
        }
        return cells.map((row, i) => {
            if (i <= HIDDEN_ROW_COUNT) {
                return
            }
            return (<>
                {row.map((cell, j) => {
                    const shape = boardState.droppingShape
                    const shapeWidth = shape.length
                    if (i - boardState.ghostPieceRow >= 0 &&
                        i - boardState.ghostPieceRow < shapeWidth &&
                        j - boardState.droppingCol >= 0 &&
                        j - boardState.droppingCol < shapeWidth
                    ) {
                        if (shape[i - boardState.ghostPieceRow][j - boardState.droppingCol] == true) {
                            cell = "ghost" as ShapeType
                        }
                    }
                    if (i - boardState.droppingRow >= 0 &&
                        i - boardState.droppingRow < shapeWidth &&
                        j - boardState.droppingCol >= 0 &&
                        j - boardState.droppingCol < shapeWidth
                    ) {
                        if (shape[i - boardState.droppingRow][j - boardState.droppingCol] == true) {
                            cell = boardState.droppingShapeType
                        }
                    }
                    return <Cell ShapeType={cell} key={`${i}${j}`} />
                })}
            </>)
        })
    }

    function HandleStartButton() {
        dispatchBoardAction("toggleIsStart");
        StartBtnRef.current!.blur();
    }
    function HandleRestartButton() {

        dispatchBoardAction("restart");
        RestartBtnRef.current!.blur();
    }

    return (
        <div className="flex flex-col justify-center mt-10">
            <div className="flex justify-center gap-2 md:gap-8">
                <div>
                    <div className="grid grid-cols-10 border w-fit h-auto">
                        {drawGrid(boardState)}
                    </div>
                </div>
                <div className="w-fit flex flex-col gap-3 h-[fit-content]">
                    <Level level={boardState.level} />
                    <LinesCleared linesCleared={boardState.linesCleared} />
                    <Score score={boardState.score} />
                    <NextPiece shapeType={boardState.nextDroppingShapeType} />
                    <div className="flex flex-col gap-2 md:flex-row justify-center items-center text-5xl">
                        <button ref={StartBtnRef} onClick={HandleStartButton}
                            className="select-none"><FaPlay /></button>
                        <button ref={RestartBtnRef} onClick={HandleRestartButton}
                            className="select-none select:outline"><FaArrowRotateLeft /></button>
                    </div>
                </div>
            </div>
            <Controls dispatchBoardAction={dispatchBoardAction} />
        </div>

    )
}
export default Tetris