/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelfN2 = nums => {
    const result = []
    // O(n^2) way too slow :(

    for (let i=0; i<nums.length; i++) {
        
        const temp = nums.slice(0,i).concat(nums.slice(i+1))
        let prod = 1
        temp.forEach(number => prod*=number)

        result[i] = prod
    }

    return result
};


const productExceptSelf = nums => {
    // O(n) time and O(n) space complexity
    // though completely possible with O(1) space assuming return array is free space.
    const leftProd = []
    const rightProd = []
    const result = []

    for (let i=0; i<nums.length; i++) {
        if (i === 0) {
            leftProd[i] = nums[i]
        } else {
            leftProd[i] = leftProd[i-1]*nums[i]
        }
    }

    for (let i=nums.length-1; i >= 0; i--) {
        if (i === nums.length-1) {
            rightProd[i] = nums[i]
        } else {
            rightProd[i] = rightProd[i+1]*nums[i]
        }
    }

    for (let i=0; i<nums.length; i++) {
        if (i===0) {
            result[i] = rightProd[i+1]
        } else if (i===nums.length-1) {
            result[i] = leftProd[i-1]
        } else {
            result[i] = leftProd[i-1]*rightProd[i+1]
        }


    }

    return result
};

// the inputs acts as linked lists
// we drop the product once the last element points back to the original index


let nums = [1,2,3,4]
console.log(productExceptSelf(nums), [24,12,8,6])