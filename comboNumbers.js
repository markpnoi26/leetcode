/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {

    const arr = []
    for (let i=0; i<n; i++) {
        arr[i] = i+1
    }

    return permuteNums(arr, 0, k)


};

const permuteNums = (arr, arLen, k, currArr = [], coll = []) => {
    if (arLen === k) {
        coll.push(currArr)
        return
    }

    if (arLen < k) {
        let remArLen = arr.length
        let originalArr = [...currArr]
        let originalLen = arLen
        for (let i=0; i<remArLen; i++) {
            currArr.push(arr[i])
            arLen++
            // how does this prevent duplication of combos when arr is sorted???
            permuteNums(arr.slice(0,i), arLen, k, currArr, coll)
            currArr = [...originalArr]
            arLen = originalLen
        }
    }

    return coll
}


let n = 4, k = 2
let output = [
    [2, 4],
    [3, 4],
    [2, 3],
    [1, 2],
    [1, 3],
    [1, 4],
]

console.log(combine(n,k).sort(), output.sort())