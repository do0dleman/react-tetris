import Cell from "../components/Cell/Cell"
import useTetris from "../hooks/useTetris"
import BoardState from "../models/BoardState"
import { HIDDEN_ROW_COUNT } from "../utils/constants"
import { FaPlay } from "react-icons/fa6"
import { FaPause } from "react-icons/fa6";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { ShapeType } from "../models/shapes"
import setGhostShapeRow from "../utils/setGhostShapeRow"
import { createRef } from "react"
import NextPiece from "../components/NextPiece"
import Score from "../components/Score"
import Level from "../components/Level"
import LinesCleared from "../components/LinesCleared"
import Controls from "../components/Controls"

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
        <div className="mt-10">
            <div className="flex justify-center gap-2 md:gap-8">
                <div>
                    <div className="grid grid-cols-10 border border-slate-400 w-fit h-auto relative">
                        {drawGrid(boardState)}
                        {boardState.isGameOver ? <div className="absolute w-full h-full flex justify-center 
                        items-center bg-black bg-opacity-50 text-4xl">
                            Game Over
                        </div> : <></>}
                        {!boardState.isStarted ? <div className="absolute w-full h-full flex justify-center 
                        items-center bg-black bg-opacity-50 text-4xl">
                            Paused
                        </div> : <></>}
                    </div>
                </div>
                <div className="w-fit flex flex-col gap-3 h-[fit-content]">
                    <Level level={boardState.level} />
                    <LinesCleared linesCleared={boardState.linesCleared} />
                    <Score score={boardState.score} />
                    <NextPiece shapeType={boardState.nextDroppingShapeType} />
                    <div className="text-5xl">
                        <div className="flex flex-col gap-4 md:flex-row justify-center items-center">
                            <button ref={StartBtnRef} onClick={HandleStartButton}
                                className="select-none">
                                {!boardState.isStarted ? <FaPlay /> :
                                    <FaPause />}
                            </button>
                            <button ref={RestartBtnRef} onClick={HandleRestartButton}
                                className="select-none select:outline">
                                <FaArrowRotateLeft />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Controls dispatchBoardAction={dispatchBoardAction} />
        </div>

    )
}
export default Tetris