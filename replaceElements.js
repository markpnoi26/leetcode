/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    const arrLength = arr.length
    let newArr = new Array(arrLength).fill(null)
    
    for (let i=0; i < arrLength-1; i++) {
        const maxRight = Math.max(...arr.slice(i+1))
        
        newArr[i] = maxRight
    }
    
    newArr[arrLength-1] = -1
    return newArr
};


let arr = [17,18,5,4,6,1]
console.log(replaceElements(arr), [18,6,6,6,1,-1])
