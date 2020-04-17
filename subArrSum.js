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

const subarraySumHash = (nums, k) => {
    // need to anylyze this approach.
    const map = new Map([[0, 1]]);
    let sum = 0;
    let total = 0;
    for (let num of nums) {
        sum = sum + num;
        total += (map.get(sum - k) || 0);
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    
    return total;

};


let nums = [1,1,1]
console.log(subarraySum(nums, 2), 2)
console.log(subarraySum(nums, 1), 3)


nums = [1,2,3, -4, -2, 0]
console.log(subarraySum(nums, 2), 2)
console.log(subarraySum(nums, 0), 3)