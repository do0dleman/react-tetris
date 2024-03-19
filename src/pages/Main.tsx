import Cell from "../components/Cell/Cell"
import JPTC from "../components/JPTC"
import MainButton from "../components/MainButton"
import SecondaryButton from "../components/SecondaryButton"

function Main() {
    return (
        <div className="container self-center flex flex-col items-center align-middle">
            <JPTC />
            <h1 className="md:text-8xl text-5xl mb-8 md:mb-16 mt-32 font-presStart [word-spacing:-4rem] 
            tracking-tighter relative text-center leading-snug">
                <div className="absolute -z-20 top-0 md:-top-8 left-1/2 -translate-x-1/2">
                    <div className="flex">
                        <Cell ShapeType="T" className="w-16 md:w-32 border-none" />
                        <Cell ShapeType="T" className="w-16 md:w-32 border-none" />
                        <Cell ShapeType="T" className="w-16 md:w-32 border-none" />
                    </div>
                    <div className="flex">
                        <Cell ShapeType={undefined} className="w-16 md:w-32 border-none" />
                        <Cell ShapeType="T" className="w-16 md:w-32 border-none" />
                        <Cell ShapeType={undefined} className="w-16 md:w-32 border-none" />
                    </div>
                </div>
                React <br /> Tetris
            </h1>
            <MainButton to="/game" className="mb-8">
                Play
            </MainButton>
            <SecondaryButton to="about" className="text-2xl">
                About
            </SecondaryButton>
        </div>
    )
}
export default Main