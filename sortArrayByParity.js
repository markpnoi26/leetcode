/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    const odd = []
    const even = []

    for (let el of A) {
        if (el%2=== 0) {
            even.push(el)
        } else {
            odd.push(el)
        }
    }

    return even.concat(odd)
};

console.log(sortArrayByParity([3,1,2,4]), [2,4,3,1])