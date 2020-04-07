/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
    candidates.sort((a,b) => a-b)
    return permuteCombos(candidates, 0, [], target)
    
};

const permuteCombos = (candidates, currNum, currArr = [], target, coll =[]) => {
    // slow because we have to keep a set
    // we need to make it faster by breaking the loop once first index is found.
    if (currNum > target) {
        return
    }
    
    if (currNum === target) {
        // let string = currArr.sort().toString()
        // if (!set.has(string)) {
        //     set.add(string)
        coll.push(currArr)
        // }
        return
    }

    if (currNum < target) {
        let len = candidates.length
        let originalArr = [...currArr]
        let originalNum = currNum
        for (let i=0; i<len; i++) {
            currNum+=candidates[i]
            currArr.push(candidates[i])
            permuteCombos(candidates.slice(i), currNum, currArr, target, coll)
            currArr = [...originalArr]
            currNum = originalNum
        }
    }

    return coll

}



let candidates = [2, 3, 6, 7], target = 7,
result = [
        [7],
        [2, 2, 3]
    ]

console.log(combinationSum(candidates, target),"answer:", result)

candidates = [2, 3, 5], target = 8,
result = [
        [2, 2, 2, 2],
        [2, 3, 3],
        [3, 5]
    ]
console.log(combinationSum(candidates, target), "answer:", result)