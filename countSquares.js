/**
 * @param {number[][]} matrix
 * @return {number}
 */

const countSquares = matrix => {
    
    let count = 0

    for (let row = 0; row < matrix.length; row++ ){
        for (let col =0; col <matrix[row].length; col++) {

            boxLoop: for (let i=0; row+i < matrix.length && col+i < matrix[row].length; i++) {
                for (let j=0; j<=i; j++) {
                    if (matrix[row + i][col + j] === 0 || matrix[row + j][col + i] === 0) break boxLoop;
                }
                count++
            }
        }
    }
    return count
}

let matrix = [
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]
console.log(countSquares(matrix), 15)

matrix = [
  [1,0,1],
  [1,1,0],
  [1,1,0]
]
console.log(countSquares(matrix), 7)