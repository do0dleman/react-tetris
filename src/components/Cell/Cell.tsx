import { ShapeType } from "../../models/shapes"
import "./cell.css"

type CellProps = {
    ShapeType: ShapeType | "ghost"
    className?: string
}

function Cell({ ShapeType, className }: CellProps) {
    return (
        <div className={`w-[30px] md:w-10 aspect-square border ${ShapeType} ${className}`} />
    )
}
export default Cell