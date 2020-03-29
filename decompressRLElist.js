/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    if (!nums) return []
    let decompList = []
    
    for (let i = 0; i < nums.length ; i+=2) {
        let newArray = new Array(nums[i]).fill(nums[i+1])
        decompList = decompList.concat(newArray)
    }
    
    return decompList
};



let nums1 = [1,2,3,4]
console.log(decompressRLElist(nums1), [2,4,4,4])

let nums2 = [1,1,2,3]
console.log(decompressRLElist(nums2), [1,3,3])