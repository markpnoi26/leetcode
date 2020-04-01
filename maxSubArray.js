/**
 * @param {number[]} nums
 * @return {number}
 */


const maxSubArray1 = function(nums) {
  
  // bruteforce
  let max = -Infinity
  for (let i=0; i<nums.length; i++) {
      let totalSum = nums[i]
      for (let j=i+1; j<nums.length; j++) {
          totalSum+=nums[j]
          max = Math.max(totalSum, max, nums[i], nums[j])
      }
  }

  return max
    
};

const maxSubArray2 = nums => {

    // This is what is known as Kadane's Algorithm
    // where max = (previousMax + array[n]) or (array[n]) which ever is greater
    // since we record the previous max, we can therefore compare previous maxSubarray + array[n] vs array[n]
    // This means that we can actually run this as O(n) time because we are merely recording previous maxes, 
    // not iterating through every possible sub array in that list.

    let max = -Infinity
    let prevRange = 0
    
    for (let i=0; i<nums.length; i++) {
        // check if previous range < than next number
        if (prevRange+nums[i] < nums[i]) {
            prevRange = nums[i]
        } else {
            prevRange+=nums[i]
        }
        // range restarts the moment nums[i] > prevRange
        max = Math.max(prevRange, max)

    }

    return max
}


console.log(maxSubArray1([-2,1,-3,4,-1,2,1,-5,4]), 6)
console.log(maxSubArray2([-2,1,-3,4,-1,2,1,-5,4]), 6)

console.log(maxSubArray1([8, -19, 5, -4, 20]), 21)
console.log(maxSubArray2([8, -19, 5, -4, 20]), 21)