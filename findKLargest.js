/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
    // solution is O(nLog(n))

    nums.sort((a,b) => b-a)
    // let index = -1
    // while (k>0) {
    //     index++
    //     k--
    // }


    return nums[k-1]

};

// * this is not the most optimized version of this code.
// This can be improved upon by doing heap sort, which is log(n)
// at the cost of extra space, O(nlogn) becomes O(n) instead.


let input = [3,2,1,5,6,4], k = 2
console.log(findKthLargest(input,k),5)


input = [3,2,3,1,2,4,5,5,6], k = 4
console.log(findKthLargest(input,k),4)
