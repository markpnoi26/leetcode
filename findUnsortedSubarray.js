/**
 * @param {number[]} nums
 * @return {number}
 */
const findUnsortedSubarray = (nums) => {
    if (nums.length === 0 || nums.length === 1) return 0
    let store = {}

    for (let i=0; i< nums.length; i++) {
        store[i] = nums[i]
    }

    nums.sort((a,b) => a-b)
    const idxSwap = []
    let firstIdx;
    let lastIdx;

    for (let i=0; i<nums.length; i++) {
        if (store[i] !== nums[i]) {
            if (idxSwap.length === 0) {
                firstIdx = i
            }
            idxSwap.push(i)
            lastIdx = i
        }
    }
    if (idxSwap.length === 0) return 0
    return (lastIdx - firstIdx + 1)
};


let input = [2, 6, 4, 8, 10, 9, 15]        
console.log(findUnsortedSubarray(input), 5)



input = [5, 6, 2, 8, 10, 9, 15]
console.log(findUnsortedSubarray(input), 6)


input = [1,2,3]
console.log(findUnsortedSubarray(input), 0)

input = []
console.log(findUnsortedSubarray(input), 0)

input = [1]
console.log(findUnsortedSubarray(input), 0)

