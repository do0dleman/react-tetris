import { ShapeType } from "../../models/shapes";
import "./cell.css";

type CellProps = {
  ShapeType: ShapeType | "ghost";
  className?: string;
};

function Cell({ ShapeType, className }: CellProps) {
  return (
    <div
      className={`w-[30px] md:w-10 aspect-square border border-slate-700 p-0.5 ${ShapeType} ${className}`}
    >
      {ShapeType != undefined ? (
        <div className="w-full h-full border-4 border-black border-opacity-20" />
      ) : (
        <></>
      )}
    </div>
  );
}
export default Cell;
