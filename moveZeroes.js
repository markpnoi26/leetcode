var moveZeroes = function(nums) {
    numsLoop: for (let i=0; i<nums.length; i++) {
        pointer = i
        while (nums[pointer] === 0) {
            pointer++
        }
        let temp = nums[pointer]
        nums[pointer] = nums[i]
        nums[i] = temp
        if (pointer === nums.length-1) break numsLoop
    }

    console.log(nums)
};


//             
moveZeroes([0,1,0,3,12])
//                   p 
//              i
//         [1,3,12,0,0]

console.log([1,3,12,0,0])