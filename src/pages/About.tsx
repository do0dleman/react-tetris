import MainButton from "../components/MainButton"

function About() {
    return (
        <div className="container md:w-[60rem] self-center flex flex-col align-middle mt-10">
            <h1 className="text-5xl mb-8 text-blue-400">About</h1>
            <p className="mb-6">This game was developed for JPTC game jam by Ņikita Obrazcovs.</p>

            <h1 className="text-5xl mb-8 text-blue-400">Controls</h1>
            <h2 className="text-3xl mb-2 text-green-400">Buttons</h2>
            <p className="mb-6">Four buttons under the grid: move left, move right, rotate, place instantly</p>

            <h2 className="text-3xl mb-2 text-green-400">Keyboard</h2>
            <ul className="list-disc mb-6">
                <li>Arrows: ←, → - move falling piece left or right</li>
                <li>Arrow ↑ - roate falling piece in right direction</li>
                <li>Arrow ↓ - speed up falling speed</li>
                <li>Space - place falling piece instantly</li>
            </ul>
            <MainButton to="/game" className="mb-30">
                Play
            </MainButton>
            <div></div>
        </div>
    )
}
export default About