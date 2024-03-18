import { SHAPES, ShapeType } from "../models/shapes"

export default function generateRandomShape() {
    const shapeKeys = Object.keys(SHAPES)
    const random_index = Math.floor(Math.random() * shapeKeys.length)

    return shapeKeys[random_index] as ShapeType
}