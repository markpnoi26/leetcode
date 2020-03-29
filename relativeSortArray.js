
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const returnArr = []
    const remElems = []
    const store = {}

    for (let el of arr1) {
        if (store[el] === undefined) {
            store[el] = 1
        } else {
            store[el]++
        }
    }

    for (let el of arr2) {
        if (store[el] !== undefined) {
            while (store[el] > 0) {
                returnArr.push(el)
                store[el]--
            }
            if (store[el] === 0) delete store[el]
        }
    }

  
    for (let key in store) {
        while (store[key] > 0) {
            remElems.push(parseInt(key))
            store[key]--
        }
    }
    remElems.sort((a,b) => a-b)


    return returnArr.concat(remElems)
};

let arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
console.log(relativeSortArray(arr1, arr2), [2,2,2,1,4,3,3,9,6,7,19])