export const SHAPES = {
    I: [
        [false, false, false, false],
        [true, true, true, true],
        [false, false, false, false],
        [false, false, false, false],
    ],
    O: [
        [false, false, false, false],
        [false, true, true, false],
        [false, true, true, false],
        [false, false, false, false],
    ],
    J: [
        [true, false, false],
        [true, true, true],
        [false, false, false],
    ],
    L: [
        [false, false, true],
        [true, true, true],
        [false, false, false],
    ],
    S: [
        [false, false, false],
        [false, true, true],
        [true, true, false],
    ],
    T: [
        [false, true, false],
        [true, true, true],
        [false, false, false],
    ],
    Z: [
        [true, true, false],
        [false, true, true],
        [false, false, false],
    ],
}

export type ShapeType = keyof typeof SHAPES | undefined 