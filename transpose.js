/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    const rows = {}
    for (let i =0; i < A.length; i++) {
        rows[i] = A[i]
    }

    const newMatrix = []
    for (let i=0; i<A[0].length; i++) {
        let newArr = new Array(A.length).fill(0)
        newMatrix.push(newArr)
    }

    for (let key in rows) {
        let col=parseInt(key, 10)
        for (let row=0; row<rows[key].length; row++) {
            newMatrix[row][col] = rows[key][row]
        }
    }
    return newMatrix
};

let mat = [[1,2,3],[4,5,6],[7,8,9]]
console.log(transpose(mat), [[1,4,7],[2,5,8],[3,6,9]])

mat = [[1,2,3],[4,5,6]]
console.log(transpose(mat), [[1,4],[2,5],[3,6]])