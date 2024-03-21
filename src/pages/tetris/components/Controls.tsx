import { createRef } from "react";
import { BoardActions } from "../../../models/BoardState"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import { IoReloadCircle } from "react-icons/io5";

function Controls({ dispatchBoardAction }: { dispatchBoardAction: React.Dispatch<BoardActions> }) {
    const leftBtnRef = createRef<HTMLButtonElement>()
    const rightBtnRef = createRef<HTMLButtonElement>()
    const roateBtnRef = createRef<HTMLButtonElement>()
    const downBtnRef = createRef<HTMLButtonElement>()

    return (
        <div className="flex text-7xl md:text-8xl gap-4 mt-4 justify-center">
            <button ref={leftBtnRef} onClick={() => {
                dispatchBoardAction("moveLeft")
                leftBtnRef.current!.blur()
            }}>
                <FaArrowLeft />
            </button>
            <button onClick={() => {
                dispatchBoardAction("moveRight")
                rightBtnRef.current!.blur()
            }}>
                <FaArrowRight />
            </button>
            <button onClick={() => {
                dispatchBoardAction("roateRight")
                roateBtnRef.current!.blur()
            }}>
                <IoReloadCircle />
            </button>
            <button onClick={() => {
                dispatchBoardAction("placeInstantly")
                downBtnRef.current!.blur()
            }}>
                <FaArrowDown />
            </button>
        </div >
    )
}
export default Controls