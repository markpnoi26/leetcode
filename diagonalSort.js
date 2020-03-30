/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {

    const store = {}

    // store cols first
    for (let j=0; j<mat[0].length; j++) {
        let row = 0, col = j
        const newArr = []
        while (true) {
            newArr.push(mat[row][col])
            row++; col++
            // stop the loop when you hit an edge, either col or row.
            if (row >= mat.length || col >= mat[0].length) break
        }
        store[`c${j}`] = newArr
    }


    // after cols are stored, start at row 1, and just iterate until you hit either row edge/col edge
    for (let i=1; i<mat.length; i++) {
        let row = i, col = 0
        const newArr = []
        while (true) {
            newArr.push(mat[row][col])
            row++; col++
            // this stops the loop similar to above.
            if (row >= mat.length || col >= mat[i].length) break
        }
        store[`r${i}`] = newArr
    }
    
    // we sort each array in the storage object
    for (let key in store) {
        store[key].sort((a,b) => a-b)
    }

    // we loop back similar to above and stop after hitting a boundary (col/row)
    // we just overwrite original matrix
    for (let j=0; j<mat[0].length; j++) {
        let row = 0, col = j
        const colAr = store[`c${j}`]
        let item = 0
        while (true) {
            mat[row][col] = colAr[item]
            row++; col++; item++
            if (row >= mat.length || col >= mat[0].length) break
        }

    }

    
    for (let i=1; i<mat.length; i++) {
        let row = i, col = 0
        const rowAr = store[`r${i}`]
        let item = 0
        while (true) {
            mat[row][col] = rowAr[item]
            row++; col++; item++
            if (row >= mat.length || col >= mat[i].length) break
        }
    }
    return mat
};



let mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
console.log(diagonalSort(mat),  [[1,1,1,1],[1,2,2,2],[1,2,3,3]])

mat = [[58],[99],[1],[6],[73],[9],[60],[88],[64],[60],[39],[29],[46],[20],[78],[95],[2],[35],[20],[53],[60],[15],[94],[78],[26],[89],[87],[93],[70],[31],[94],[58],[90],[48],[60],[6],[68],[62],[32],[36],[73],[49],[45],[31],[23],[3],[73],[70],[71],[18],[14],[49],[84],[72],[59],[91],[17],[46],[93],[31],[31],[71],[52],[83],[8],[95],[49],[57],[52],[65],[83],[98],[46],[55],[44],[100],[45],[7],[59],[38],[82],[62],[25],[55],[64],[56],[89],[2],[10],[57],[26],[19],[27],[80],[12],[32],[62],[91],[68],[92]]

let expect = [[58],[99],[1],[6],[73],[9],[60],[88],[64],[60],[39],[29],[46],[20],[78],[95],[2],[35],[20],[53],[60],[15],[94],[78],[26],[89],[87],[93],[70],[31],[94],[58],[90],[48],[60],[6],[68],[62],[32],[36],[73],[49],[45],[31],[23],[3],[73],[70],[71],[18],[14],[49],[84],[72],[59],[91],[17],[46],[93],[31],[31],[71],[52],[83],[8],[95],[49],[57],[52],[65],[83],[98],[46],[55],[44],[100],[45],[7],[59],[38],[82],[62],[25],[55],[64],[56],[89],[2],[10],[57],[26],[19],[27],[80],[12],[32],[62],[91],[68],[92]]

console.log(diagonalSort(mat), expect)