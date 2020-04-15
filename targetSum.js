/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
const findTargetSumWays = (nums, S) => {

    let sumCount = 0
    let numsLen = nums.length
    
    const permuteString = (nums, S, currSum, idx) => {

        if (idx === numsLen) {
            if (currSum === S) sumCount++
            return
        }

        let nextIdx = idx+1
        let sub = currSum - nums[idx]
        let add = currSum + nums[idx]
        permuteString(nums, S, add, nextIdx)
        permuteString(nums, S, sub, nextIdx)


    }

    permuteString(nums, S, 0, 0)
    
    return sumCount
        
};

/**
 * Original Solution, very slow because of the slice method, however, because of indexing
 * we can actually make it faster!!
 */
// const findTargetSumWays = (nums, S) => {

//     let sumCount = 0

//     const permuteString = (nums, S, currSum) => {

//         if (nums.length === 0) {
//             if (currSum === S) sumCount++
//             return
//         }

//         permuteString(nums.slice(1), S, currSum += nums[0])
//         currSum -= nums[0]
//         permuteString(nums.slice(1), S, currSum -= nums[0])

//     }

//     permuteString(nums, S, 0)
//     return sumCount

// };




let nums = [1, 1, 1, 1, 1], s = 3

console.log(findTargetSumWays(nums, s), 5)