/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {

    if (nums.length === 0) return [-1,-1]
    if (nums.length === 1 && nums[0] !== target) return [-1,-1]
    if (nums.length === 1 && nums[0] === target) return [0,0]

    const answer = []
    let pointer1 = 0
    let pointer2 = nums.length-1

    while (true) {
        let mid = Math.floor((pointer2+pointer1)/2)
        if (nums[mid] < target) {
            if (pointer1 === mid) {
                pointer1++
            } else {
                pointer1 = mid
            }
        } else if (nums[mid] >= target) {
            pointer2 = mid
        }

        if (pointer1 === pointer2) break
    }

    answer[0] = nums[pointer1] !== target? -1:pointer1


    pointer1 = 0
    pointer2 = nums.length-1
    while (true) {
        let mid = Math.ceil((pointer2+pointer1)/2)
        if (nums[mid] <= target) {
            pointer1 = mid
        } else if (nums[mid] > target) {
            if (pointer2 === mid) {
                pointer2--
            } else {
                pointer2 = mid
            }
        }

        if (pointer1 === pointer2) break
    }

    answer[1] = nums[pointer2] !== target? -1:pointer2

    return answer
    
};


let nums = [5,7,7,8,8,10], target = 8
console.log(searchRange(nums, target), [3,4])
console.log(searchRange(nums, 5), [0,0])
console.log(searchRange(nums,10), [5,5])


nums = [5,7,7,8,8,10], target = 6
console.log(searchRange(nums, target), [-1,-1])

nums = [2,2], target = 1
console.log(searchRange(nums, target), [-1,-1])

nums = [1,3], target = 1
console.log(searchRange(nums, target), [0,0])