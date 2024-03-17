import { ShapeType } from "../../models/shapes"
import "./cell.css"

type CellProps = {
    ShapeType: ShapeType
}

function Cell({ ShapeType }: CellProps) {
    return (
        <div className={`w-10 h-10 border ${ShapeType}`} />
    )
}
export default Cell