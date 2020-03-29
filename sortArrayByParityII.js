/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    
    const even = []
    const odd = []
    const ans = []
    
    for (let el of A) {
        if (el%2 === 0) {
            even.push(el)
        } else {
            odd.push(el)
        }
    }
    
    const halfLen = A.length/2
    
    for (let i =0; i<halfLen; i++) {
        ans.push(even[i])
        ans.push(odd[i])
    }
    
    return ans
};

console.log(sortArrayByParityII([4,2,5,7]), [4,5,2,7])