/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

const searchMatrix = (matrix, target) => {
    
    if (matrix.length === 0 || matrix[0].length === 0) return false

    let i = 0
    let j = matrix[0].length-1

    while (i <= matrix.length-1 && j >= 0) {
        if (matrix[i][j] === target) return true

        if (matrix[i][j] < target) {
            i++
        } else {
            j--
        }

    }
    
    return false
}


let mtx = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
]

console.log(searchMatrix(mtx, 5), true)
console.log(searchMatrix(mtx, 20), false)
console.log(searchMatrix(mtx, 31), false)
mtx =[[]]
console.log(searchMatrix(mtx, 10), false)
mtx = [
    [-5]
]
console.log(searchMatrix(mtx, 10), false)

mtx = [
    [1,1]
]
console.log(searchMatrix(mtx, 10), false)