/**
 * @param {number[]} nums
 * @return {number}
 */

var findNumbers = function(nums) {
    
    if (!nums) return 0
    
    const newArray = []
    let evenCount = 0

    for (let el of nums) {
        newArray.push(el.toString())
    }
    
    
    for (let el of newArray) {
        if (el.length%2 === 0) {
            evenCount++
        }
    }
    
    return evenCount
};

let nums1 = [12,345,2,6,7896]
console.log(findNumbers(nums1),2)

let nums2 = [555,901,482,1771]
console.log(findNumbers(nums2),1)