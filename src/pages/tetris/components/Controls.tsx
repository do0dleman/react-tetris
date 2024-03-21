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

    const HandleLeftBtnClick = () => {
        dispatchBoardAction("moveLeft")
        leftBtnRef.current!.blur()
    }
    const HandleRightBtnClick = () => {
        dispatchBoardAction("moveRight")
        rightBtnRef.current!.blur()
    }
    const HandleRotateBtnClick = () => {
        dispatchBoardAction("roateRight")
        roateBtnRef.current!.blur()
    }
    const HandlePlaceBtnClick = () => {
        dispatchBoardAction("placeInstantly")
        downBtnRef.current!.blur()
    }

    return (
        <div className="flex text-7xl md:text-8xl gap-4 mt-4 justify-center">
            <button ref={leftBtnRef} onClick={HandleLeftBtnClick}>
                <FaArrowLeft />
            </button>
            <button onClick={HandleRightBtnClick}>
                <FaArrowRight />
            </button>
            <button onClick={HandleRotateBtnClick}>
                <IoReloadCircle />
            </button>
            <button onClick={HandlePlaceBtnClick}>
                <FaArrowDown />
            </button>
        </div >
    )
}
export default Controls