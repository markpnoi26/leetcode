/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {

    let arr = []
    let min = []

    for (let i =0; i< mat.length; i++) {
        let counter = 0 
        for (let j=0; j<mat[i].length; j++) {
            if (mat[i][j] === 1) {
                counter++
            } 
            if (mat[i][j] === 0) break
        }
        arr.push([i, counter])
    }
    
    arr.sort((a,b) => {
        if (a[1]=== b[1]) {
            return a[0]-b[0]
        } else {
            return(a[1]-b[1])
        }
    })
        
    for (let i=0; i<k; i++) {
        min.push(arr[i][0])
    }
    // console.log(arr)
    return min
    
};

let mat = [
    [1,1,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,1,0,0,0],
    [1,1,1,1,1]
], k = 3
console.log(kWeakestRows(mat, k), [2,0,3])

mat = [
    [1,0,0,0],
    [1,1,1,1],
    [1,0,0,0],
    [1,0,0,0]
], k = 2
console.log(kWeakestRows(mat, k), [0, 2])
