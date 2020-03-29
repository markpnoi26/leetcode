/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    
    const array = []
    
    const end = Math.floor(n/2)+1
    for (let i = 1; i<end; i++) {
        array.push(i)
        array.push(i*-1)
    }

    if (n%2 !== 0) {
        array.push(0)
    }

    return array
};

let n = 5
console.log(sumZero(n), [-7,-1,1,3,4])


n = 3
console.log(sumZero(n), [-1,0,1])

n = 1
console.log(sumZero(n), [0])
