/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let store = {}

    for (let i=0; i < arr.length; i++) {
        let char = arr[i]
        if (store[char] === undefined) {
            store[char] = 1
        } else {
            store[char]++
        }
    }

    let maxLucky = -1

    for (let key in store) {
        if (parseInt(key, 10) === store[key]) {
            if (maxLucky < store[key]) {
                maxLucky = store[key]
            }
        }
    }
    return maxLucky
};


let arr = [2,2,3,4]
console.log(findLucky(arr), 2)

arr = [1,2,2,3,3,3]
console.log(findLucky(arr), 3)

arr = [2,2,2,3,3]
console.log(findLucky(arr), -1)