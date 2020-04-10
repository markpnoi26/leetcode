/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = nums => {
    // classic floyd tortoise and hare because the rest fails
    // can easily find if we sort and enumerate less than n^2 time complexity (assumed not read only)
    // can easily find the duplicate using another hash table but it would be O(n) space
    // can do Math.abs(nums[nums[i]]*-1) and then find the index thats not negative +1 => (assume not read only)


    let turtle = nums[0]
    let rabbit = nums[0]

    while (true) {
        console.log("called")
        turtle = nums[turtle]
        rabbit = nums[nums[rabbit]]
        if (turtle === rabbit) {
            break
        }
    }

    let p1 = turtle
    let p2 = nums[0]

    while (p1 !== p2) {
        p1 = nums[p1]
        p2 = nums[p2]

    }

    return p1
};

let nums = [1,3,4,2,2]
console.log(findDuplicate(nums), 2)



nums = [3,1,3,4,2]
console.log(findDuplicate(nums), 3)