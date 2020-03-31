/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDisappearedNumbers = function(nums) {
//     const store = {}
//     const answer = []

//     for (let i = 0; i < nums.length; i++) {
//         if (store[nums[i]] === undefined) {
//             store[nums[i]] = true
//         }
//     }

//     let count = 1
//     const arLen = nums.length
//     while (count <= arLen) {
//         if (store[count] === undefined) {
//             answer.push(count)
//         }
//         count++
//     }

//     return answer
// };

// O(n) solution without using extra Space assuming answer is free
// var findDisappearedNumbers = function(nums) {
//     let counter = 1
//     const answer = []
//     while (counter <= nums.length) {
//         for (let i =0; i<nums.length; i++) {
//             if (nums[i] === counter) break
//             if (i === nums.length-1) answer.push(counter)
//         }
//         counter ++
//     }
//     return answer
// };

var findDisappearedNumbers = function(nums) {
    
    for (let i=0; i<nums.length; i++) {
        let actual = Math.abs(nums[i]) - 1;
        if (nums[actual] > 0) {
            console.log(actual, nums[actual])
            nums[actual] *= -1;
        }
    }
    const ans =[]

    for (let i =0; i< nums.length; i++) {
        if (nums[i] > 0) {
            ans.push(i+1)
        }
    }

};


console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]), [5,6])
