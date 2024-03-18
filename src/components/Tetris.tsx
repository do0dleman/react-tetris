import Cell from "./Cell/Cell"
import useTetris from "../hooks/useTetris"
import BoardState from "../models/BoardState"
import { HIDDEN_ROW_COUNT } from "../utils/constants"
import { FaPlay } from "react-icons/fa6"
import { IoReloadCircle } from "react-icons/io5";
import { ShapeType } from "../models/shapes"
import setGhostShapeRow from "../utils/setGhostShapeRow"

function Tetris() {
    const [boardState, dispatchBoardAction] = useTetris()

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

    // useEffect(() => {

    // }, [])

    function HandleStartButton(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();

        (e.target as HTMLElement).blur()
        dispatchBoardAction("toggleIsStart")
    }
    function HandleRestartButton(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        (e.target as HTMLElement).blur()
        dispatchBoardAction("restart")
    }

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-10 border-b border-r w-fit">
                {drawGrid(boardState)}
            </div>
            <div className="w-fit flex flex-col gap-3 text-6xl">
                <button onClick={HandleStartButton}
                    className="select-none"><FaPlay /></button>
                <button onClick={HandleRestartButton}
                    className="select-none"><IoReloadCircle /></button>
            </div>
        </div>
    )
}
export default Tetris