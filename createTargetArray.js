/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    const target = new Array(nums.length).fill(null)

    //insert at index[i] the value of nums[i] in target
    for (let i = 0; i < index.length; i ++) {
       
        if (target[index[i]] !== null) {
            target.splice(index[i], 0, nums[i])
        } else {
            target[index[i]] = nums[i]
        }
        
    }
    
    // console.log(target.filter(el => el !== null))
    return target.filter(el => el !== null)
    
};

let nums = [0,1,2,3,4], index = [0,1,2,2,1]
console.log(createTargetArray(nums), [0,4,1,3,2])

let nums1= [1,2,3,4,0], index = [0,1,2,3,0]
console.log(createTargetArray(nums2), [0,1,2,3,4])