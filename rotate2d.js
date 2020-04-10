/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = matrix => {
    
    let matrixHalfEnd = Math.floor(matrix.length/2)
    let iEnd = matrix.length-1
    let jEnd = matrix[0].length-1
    for (let i=0; i<matrixHalfEnd; i++) {
        let rowEnd = matrix[i].length-(1+i)
        for (let j=0+i; j<rowEnd;j++) {
            //rotate the current item
            let temp = matrix[i][j] 
            matrix[i][j] = matrix[iEnd-j][i]
            matrix[iEnd-j][i] = matrix[iEnd-i][jEnd-j]
            matrix[iEnd-i][jEnd-j] = matrix[j][jEnd-i]
            matrix[j][jEnd-i] = temp
        }
    }


};

const printMtx = matrix => {
    console.log("=============")
    for (let mtx of matrix) {
        console.log(mtx)
    }
    console.log("=============")
}

let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
rotate(matrix)
printMtx(matrix)
let output = [
    [7,4,1],
    [8,5,2],
    [9,6,3]
  ]
printMtx(output)


matrix =[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]
rotate(matrix)
printMtx(matrix)
output = [
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
printMtx(output)