import { FaArrowRotateLeft, FaPause, FaPlay } from "react-icons/fa6"
import BoardState, { BoardActions } from "../../../models/BoardState"
import { VscMute, VscUnmute } from "react-icons/vsc"
import { createRef } from "react"

type SettingsButtonsProps = {
    dispatchBoardAction: React.Dispatch<BoardActions>
    boardState: BoardState
}

function SettingsButtons({ dispatchBoardAction, boardState }: SettingsButtonsProps) {
    const StartBtnRef = createRef<HTMLButtonElement>()
    const RestartBtnRef = createRef<HTMLButtonElement>()
    const SoundBtnRef = createRef<HTMLButtonElement>()

    function HandleStartButton() {
        dispatchBoardAction("toggleIsStart");
        StartBtnRef.current!.blur();
    }
    function HandleRestartButton() {
        dispatchBoardAction("restart");
        RestartBtnRef.current!.blur();
    }
    function HandleSoundButton() {
        dispatchBoardAction("toggleSFX");
        SoundBtnRef.current!.blur();
    }

    return (
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
            <div className="flex justify-center pt-4">
                <button ref={SoundBtnRef} onClick={HandleSoundButton}>
                    {boardState.isSFXon ? <VscUnmute /> : <VscMute />}
                </button>
            </div>
        </div>
    )
}
export default SettingsButtons