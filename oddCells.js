/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    
    const grid = new Array()
    for (let i = 0; i<n; i++) {
        let newCol = new Array(m).fill(0)
        grid.push(newCol)
    }

    let oddCount = 0

    for (let el of indices) {
        const N = el[0]
        const M = el[1]
        
        for (let i = 0; i<m; i++) {
            grid[N][i]++
            if (grid[N][i]%2 !== 0) {
                oddCount++
            } else {
                oddCount--
            }
        }

        for (let j = 0; j<n; j++) {
            grid[j][M]++
            if (grid[j][M]%2 !== 0) {
                oddCount++
            } else {
                oddCount--
            }
        }
        
    }
    // more optimzed to count odd and subtract as items become odd/even

//     for (let el of grid) {
//         for (let elem of el) {
//             if (elem%2 !== 0) oddCount ++
//         }
//     }

    return oddCount

};

let n = 2, m = 3, indices = [[0,1],[1,1]]

console.log(oddCells(n, m, indices), 6)

n = 2, m = 2, indices = [[1,1],[0,0]]

console.log(oddCells(n, m, indices), 0)