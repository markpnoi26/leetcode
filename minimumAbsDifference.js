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

let arr1 = [4,2,1,3]
console.log(minimumAbsDifference(arr1), ":",[[1,2],[2,3],[3,4]])

let arr2 = [1,3,6,10,15]
console.log(minimumAbsDifference(arr2), ":",[[1,3]])


let arr3 = [3,8,-10,23,19,-4,-14,27]
console.log(minimumAbsDifference(arr3), ":",[[-14,-10],[19,23],[23,27]])
