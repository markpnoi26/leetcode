/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    
    let sqs = []

    for (let el of A) {
        sqs.push(el**2)
        
    }


    return sqs.sort((a,b) => a-b)

};

let array = [-4,-1,0,3,10]
console.log(sortedSquares(array), [0,1,9,16,100])

array =  [-7,-3,2,3,11]
console.log(sortedSquares(array), [4,9,9,49,121])