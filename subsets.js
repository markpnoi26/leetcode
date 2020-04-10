/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums) => {
    
    nums.sort((a,b) => a-b)
    const collection = []
    
    const subsetPermute  = (nums, currArr=[]) => {
        collection.push([...currArr])

        if (!nums) {
            return
        }

        for (let i=0; i<nums.length; i++) {
            currArr.push(nums[i])
            subsetPermute(nums.slice(i+1), currArr)
            currArr.pop()           
        }

    }
        
    subsetPermute(nums, [])
    return collection
};

let nums = [1,2,3]
let output = [[3],[1],[2],[1,2,3],[1,3],[2,3],[1,2],[]]

console.log(subsets(nums), output)