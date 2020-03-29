/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let distanceVal = 0

    // The distance value is defined as the number of elements arr1[i] such 
    // that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.
    // let sorted2 = arr2.sort((a,b) => a-b)

    for (let i =0;i<arr1.length; i++) {
        for (let j=0; j<arr2.length; j++) {
            let distance = Math.abs(arr1[i] - arr2[j])
            if (distance <= d) break
            if (j === arr2.length-1) distanceVal++
        }
    }

    return distanceVal
};

let arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
console.log(findTheDistanceValue(arr1, arr2, d), 2)

arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3
console.log(findTheDistanceValue(arr1, arr2, d), 2)

arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6
console.log(findTheDistanceValue(arr1, arr2, d), 1)