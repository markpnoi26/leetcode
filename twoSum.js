/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const store = {}
    for (let i=0; i<nums.length; i++) {
        store[nums[i]] = i
    }
    
    for (let i=0; i<nums.length; i++) {
        let other = target - nums[i]
        if (store[other] !== undefined && store[other] !== i) {
            return [i, store[other]]
        }
    }
};

let arr =[2, 7, 11, 15], target = 9

console.log(twoSum(arr, target), [0,1])


arr = [3,2,4], target = 6

console.log(twoSum(arr, target), [1,2])

arr = [3,3], target = 6

console.log(twoSum(arr, target), [0,1])