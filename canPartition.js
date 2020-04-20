/**
 * @param {number[]} nums
 * @return {boolean}
 */

const canPartition =  (nums) => {

    let total = nums.reduce(((acc, currVal) => acc + currVal), 0)
    let found = false

    if (total %2 !== 0) return found

    const dp = new Array(total/2+1).fill(false)
    dp[0] = true

    for (let i = 0; i < nums.length; i++) {
        for (let j = total/2; j >= 0; j--) {
            if (j >= nums[i]) {
                dp[j] = dp[j] || dp[j - nums[i]];
            }
        }
    } 

    console.log(dp)

    return dp[dp.length-1]
};


let nums = [1, 5, 11, 5]
console.log(canPartition(nums), true)

nums = [1, 2, 3, 5]
console.log(canPartition(nums), false)

nums = [1, 2, 3, 4, 5, 6, 7]
console.log(canPartition(nums), true)

// nums = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
// console.log(canPartition(nums), true)