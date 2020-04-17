/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {

    let currCount = 0

    for (let i = 0; i<nums.length; i++) {
        let currSum = 0
        for (let j = i; j<nums.length; j++) {
            currSum+=nums[j]
            if (currSum === k) currCount++
        }
    }
    
    return currCount
};


let nums = [1,1,1]
console.log(subarraySum(nums, 2), 2)
console.log(subarraySum(nums, 1), 3)


nums = [1,2,3, -4, -2, 0]
console.log(subarraySum(nums, 2), 2)
console.log(subarraySum(nums, 0), 3)