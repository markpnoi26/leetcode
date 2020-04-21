/**
 * @param {number[]} nums
 * @return {number}
 */

const lengthOfLIS = (nums) => {
    if (nums.length === 0) return 0
    let globalMax = 1
    const dp = []
    dp[0] = 1

    for (let i = 1; i < nums.length; i++) {
        let maxVal = 1
        for (let j=0; j<i; j++) {
            if (nums[i] > nums[j]) {
                maxVal = Math.max(maxVal, dp[j] + 1)
            }
        }
        dp[i] = maxVal
        globalMax = Math.max(maxVal, globalMax)
    }

    return globalMax
    
};



let nums = [10, 9, 2, 5, 3, 7, 101, 18]

console.log(lengthOfLIS(nums), 4)

/**                   i
 *      [10, 9, 2, 5, 3, 7, 101, 18]
 *                 j  
 *          
 * dp   [1,  1, 1, 2, 2, ]
 */