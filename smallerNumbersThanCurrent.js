/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let response = []
    
    for (let el of nums) {
        let count = 0
        let j = 0
        while (j < nums.length) {
            if (el > nums[j])  count++
            j++
        }
        response.push(count)
    }
    return response
};


let nums = [6,5,4,8]
console.log(smallerNumbersThanCurrent(nums),[2,1,0,3])

let nums2 = [7,7,7,7]
console.log(smallerNumbersThanCurrent(nums2),[0,0,0,0])