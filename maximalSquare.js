/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = matrix => {   

    const dp = []
    let max = 0

    for (let i=0; i<matrix.length; i++) {
        dp[i] = []
        for (let j=0; j<matrix[i].length; j++) {
            dp[i][j] = 0
            if (i === 0 && matrix[i][j] === "1" || j === 0 && matrix [i][j] === "1") {
                dp[i][j]++
            } 

            if (i > 0 && j > 0 && matrix[i][j] === "1") {
                dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1], dp[i-1][j-1])+1
            } 

            max = Math.max(dp[i][j], max)
        }
    }
    return max**2
};

let matrix = [
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","1","1","1"]
]
console.log(maximalSquare(matrix), 4)