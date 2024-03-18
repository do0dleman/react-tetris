function LinesCleared({ linesCleared }: { linesCleared: number }) {
    return (
        <div className="text-2xl w-fit">
            <h2>Lines</h2>
            <div className="border text-2xl md:text-3xl w-20 md:w-28 p-2">{linesCleared}</div>
        </div>
    )
}
export default LinesCleared