/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const store = {}

    for (let i=0; i<nums.length; i++) {
        if (store[nums[i]] === undefined) {
            store[nums[i]] = 1
        } else {
            store[nums[i]]++
        }
    }

    // console.log(store)

    let maxNum = -Infinity
    let currMax = null
    for (let key in store) {
        if (store[key] > maxNum) {
            maxNum = store[key]
            currMax = key
        }
    }
    return currMax
};

console.log(majorityElement([3,2,3]), 3)

console.log(majorityElement([2,2,1,1,1,2,2]), 2)