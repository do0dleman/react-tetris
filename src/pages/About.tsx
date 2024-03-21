import MainButton from "../components/MainButton"

function About() {
    return (
        <div className="container md:w-[60rem] self-center flex flex-col align-middle mt-10">
            <h1 className="text-5xl mb-8 text-blue-400">About</h1>
            <p className="mb-6">This game was developed for JPTC game jam by Ņikita Obrazcovs.</p>

            <h1 className="text-5xl mb-8 text-blue-400">Controls</h1>
            <h2 className="text-3xl mb-2 text-green-400">Buttons</h2>
            <p className="">4 buttons under the grid: move left, move right, rotate, place instantly</p>
            <p className="mb-6">3 buttons right to the grid: pause, restart, mute/unmute</p>

            <h2 className="text-3xl mb-2 text-green-400">Keyboard</h2>
            <ul className="list-disc mb-6 [&>li]:mb-1">
                <li><Key>←</Key>, <Key>→</Key> - move falling piece left or right</li>
                <li><Key>↑</Key> - roate falling piece in right direction</li>
                <li><Key>↓</Key> - speed up falling speed</li>
                <li><Key>Space</Key> - place falling piece instantly</li>
                <li><Key>p</Key> - pause</li>
                <li><Key>r</Key> - restart</li>
                <li><Key>m</Key> - mute or unmute sound</li>
            </ul>
            <MainButton to="/game" className="mb-30">
                Play
            </MainButton>
            <div></div>
        </div>
    )
}

const Key = ({ children }: { children: React.ReactNode }) => {
    return <kbd className="border px-2  rounded-md">{children}</kbd>
}
export default About