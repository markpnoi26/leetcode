/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {

    if (!nums.length) return -1

    let left = 0
    let right = nums.length-1

    while (left < right) {
        let mid = Math.floor((left+right)/2)
        if (nums[mid] > nums[right]) {
            left = mid+1
        } else {
            right = mid
        }
    }

    let pivot = left
    right = nums.length-1
    left = 0
    
    if (target <= nums[right] && target >= nums[pivot]) {
        left = pivot
    } else {
        right = pivot
    }

    while (left !== right) {
        let mid = Math.floor((left+right)/2)
        if (nums[mid] === target) return mid 
        if (target <= nums[mid]) {
            right = mid
        } else {
            left = mid+1
        }
    }

    return nums[left] !== target? -1:left
    
};

console.log(search([4,5,6,7,0,1,2], 0), 4)                         
console.log(search([4,5,6,7,0,1,2], 3), -1)
console.log(search([], 5), -1)
console.log(search([5,1,3], 1), 1)
console.log(search([5,1,3], 5), 0)
console.log(search([5,1,3], 3), 2)
console.log(search([3,1], 0), -1)
