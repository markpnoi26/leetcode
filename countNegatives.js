/**
 * @param {number[][]} grid
 * @return {number}
 */
// var countNegatives = function(grid) {
    
//     //brute force
//     let negCount = 0
//     for (let i=0; i<grid.length; i++) {
//         for (let j=0; j<grid[i].length; j++) {
//             const rowLength = grid[i].length
//             if (grid[i][j] < 0) {
//                 let negatives = rowLength - j    
//                 negCount += negatives
//                 break
//             }
//         }
//     }
    
//     return negCount
// };

var countNegatives = function (grid) {
    
    // traversing the grid method
    
    const rowLength = grid[0].length
    let negCount = 0
    let jVal = null
    
    for (let i=0; i<grid.length; i++) {
        if (jVal !== null) {
            while (jVal > 0 && grid[i][jVal-1] < 0) {
                jVal--
            }
            let negatives = rowLength - jVal
            negCount += negatives
        } else {
            for (let j=0; j<grid[i].length; j++) {
                if (grid[i][j] < 0) {
                    let negatives = rowLength - j    
                    negCount += negatives
                    jVal = j
                    break
                }
            }
        }
    }
    
    return negCount
    
    
}


let grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
console.log(countNegatives(grid), 8)

let grid1 = [[3,2],[1,0]]
console.log(countNegatives(grid1), 0)

let grid3 = [[1,-1],[-1,-1]]
console.log(countNegatives(grid3), 3)

let grid4 = [[-1]]
console.log(countNegatives(grid4), 1)
