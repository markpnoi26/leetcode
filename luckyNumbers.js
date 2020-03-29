/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const luckyNums = []


    for (let i =0; i<matrix.length; i++) {
        for (let j= 0; j<matrix[i].length; j++) {
            if ( matrix[i][j] === Math.min(matrix[i][j], ...matrix[i])) {
                const colElements = []
                for (let k=0; k< matrix.length; k++) {
                    colElements.push(matrix[k][j])
                }

                if (matrix[i][j] === Math.max(matrix[i][j], ...colElements)) {
                    luckyNums.push(matrix[i][j])
                }
            }
            
        }
    }
    return luckyNums
};

let matrix = [[3,7,8],[9,11,13],[15,16,17]]
console.log(luckyNumbers(matrix),[15])

matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
console.log(luckyNumbers(matrix), [12])

matrix = [[7,8],[1,2]]
console.log(luckyNumbers(matrix), [7])