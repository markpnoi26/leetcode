/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let arReturn = []
    let min = Infinity

    arr.sort((a,b) =>  a-b)

    for (let i=0; i<arr.length-1; i++) {
        let currMin = Math.abs(arr[i] - arr[i+1])
        if (currMin < min) {
            min = currMin
            arReturn = []
            arReturn.push([arr[i], arr[i+1]])
        } else if (currMin === min) {
            arReturn.push([arr[i], arr[i+1]])
        }
    }


    return arReturn
};

let arr = [4,2,1,3]
console.log(minimumAbsDifference(arr), [[1,2],[2,3],[3,4]])

arr = [1,3,6,10,15]
console.log(minimumAbsDifference(arr), [[1,3]])
