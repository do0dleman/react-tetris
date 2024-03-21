function Level({ level }: { level: number }) {
    return (
        <div className="text-2xl w-fit">
            <h2>Level</h2>
            <div className="border text-2xl md:text-3xl w-20 md:w-28 p-2">{level}</div>
        </div>
    )
}
export default Level