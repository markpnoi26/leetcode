/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
    // keep track of max at each index

    if (nums.length === 2) {
        return Math.max(...nums)
    } else if (nums.length === 1) {
        return nums[0]
    } else if (nums.length === 0) {
        return 0
    }

    let globalMax = Math.max(nums[0], nums[1])
    let max = nums[0]
    let prev = nums[1]

    for (let i=2; i<nums.length; i++) {
        let curr = max + nums[i]
        max = Math.max(max, prev)
        globalMax = Math.max(max, curr)
        prev = curr
    }

    return globalMax
    
};

//           1 2 4 3 
let house = [1,2,3,1]
console.log(rob(house), 4)

//       2 7 11 10 12 
house = [2,7, 9, 3,1]
console.log(rob(house), 12)

//       4  7 12 10  21 22
house = [4, 7, 8, 3, 9, 10]
//                   i
// prev = 10
// max = 12
// curr = 21

// max = Math.max(max, prev)

console.log(rob(house), 22)

house = []
console.log(rob(house), 0)
house = [0]
console.log(rob(house), 0)

// The robber can either rob the current house, or not rob the current house.
// If the robber choose to rob the current house, it means he has to skip the next house
// If the robber choose not rob the current house, it means he can go to the next house and decide again.