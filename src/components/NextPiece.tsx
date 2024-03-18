import { SHAPES, type ShapeType } from "../models/shapes"
import Cell from "./Cell/Cell"

function NextPiece({ shapeType }: { shapeType: ShapeType }) {
    const shape = SHAPES[shapeType!]


    return (
        <div className="text-sm md:text-xl">
            <span>Next Piece:</span>
            <div className="w-20 md:w-28 aspect-square border p-2">
                {shape.map(row => <div className="flex">
                    {row.map(cell => {
                        let cellType = undefined
                        if (cell) cellType = shapeType
                        return <Cell key={"cell"} ShapeType={cellType} className="border-none w-fit flex-1 
                        h-fit aspect-square" />
                    }
                    )}
                </div>)}
            </div>
        </div>
    )
}
export default NextPiece