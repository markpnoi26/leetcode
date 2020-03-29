/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    
    for (let k=0; k < A.length; k++) {
        const fullLen = A[k].length
        const halfLen = Math.floor(A[k].length/2)
        for (let i = 0; i < halfLen; i++) {
            let temp = A[k][i]
            A[k][i] = A[k][fullLen-1-i]
            A[k][fullLen-1-i] = temp
        }

        for (let i = 0; i < fullLen; i++) {
            if (A[k][i] === 1) {
                A[k][i] = 0
            } else {
                A[k][i] = 1
            }
        }
    }
    return A
};


let mat = [[1,1,0],[1,0,1],[0,0,0]]
console.log(flipAndInvertImage(mat),[[1,0,0],[0,1,0],[1,1,1]])

mat = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
console.log(flipAndInvertImage(mat), [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]])
