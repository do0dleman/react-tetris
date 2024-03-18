export default function rotate2dArrayRight(a: any[][]) {
    const N = a.length
    console.log(N)

    for (let i = 0; i < Math.floor(N / 2); i++) {
        for (let j = i; j < N - i - 1; j++) {

            // Swap elements of each cycle
            // in clockwise direction
            var temp = a[i][j];
            a[i][j] = a[N - 1 - j][i];
            a[N - 1 - j][i] = a[N - 1 - i][N - 1 - j];
            a[N - 1 - i][N - 1 - j] = a[j][N - 1 - i];
            a[j][N - 1 - i] = temp;
        }
    }
    // return a
}