function Score({ score }: { score: number }) {
    return (
        <div className="text-2xl w-fit">
            <h2>Score</h2>
            <div className="border text-2xl md:text-3xl w-20 md:w-28 p-2">{score}</div>
        </div>
    )
}
export default Score