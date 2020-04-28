/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {

    let left = 0
    let right = nums.length-1
    let leftEdge = nums[left]
    let rightEdge = nums[right]

    while (true) {
        let mid = Math.floor(left+right/2)

        if (target > nums[mid] && target < ) {
            left = mid
        }

        if (left === right) break
    }

    return nums[left] !== target? -1:nums[left]
    
};

//                               r
console.log(seaarch([4,5,6,7,0,1,2], 0), 4)
//                   l   
//                          

console.log(seaarch([4,5,6,7,0,1,2], 3), -1)
