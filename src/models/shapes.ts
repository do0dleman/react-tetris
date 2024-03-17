export const SHAPES = {
    I: [
        [true, true, true, true],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
    ],
    O: [
        [false, false, false, false],
        [false, true, true, false],
        [false, true, true, false],
        [false, false, false, false],
    ]
}

export type ShapeType = keyof typeof SHAPES | undefined