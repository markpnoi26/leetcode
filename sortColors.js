/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = nums => {
    // dual pass
    const colors = {
        "0": 0,
        "1": 0,
        "2": 0
    }

    for (let el of nums) {
        colors[el]++
    }

    let idx = 0
    for (let key in colors) {
        while (colors[key] > 0) {
            nums[idx] = parseInt(key,10)
            idx++
            colors[key]--
        }
    }


    return "sorted!"
};


const sortColorsOnePass = nums => {

    let start = 0
    let end = nums.length -1
    let i = 0

    while (i<end) {
        if (nums[i] === 2) {
            let temp = nums[i]
            nums[i] = nums[end]
            nums[end] = temp
            end --
        } else if (nums[i] === 0) {
            let temp = nums[i]
            nums[i] = nums[start]
            nums[start] = temp
            start++
            i++
        } else {
            i++
        }
    }


    return "sorted!"
};



let nums = [2,0,2,1,1,0]
// console.log(sortColors(nums), nums)
/**    i
 *    [0, 0, 1, 1, 2, 2]
 *                 j
 *  
 */
console.log(sortColorsOnePass(nums), nums)


nums = [2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1]
// console.log(sortColors(nums), nums)
console.log(sortColorsOnePass(nums), nums)