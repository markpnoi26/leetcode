/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    

    if (N === 0) {
        return 0
    } else if (N === 2 || N === 1) {
        return 1
    }

    return(fib(N-1) + fib(N-2))

    // can have count O(n) time, O(1) space
};

let n = 2
console.log(fib(n), 1)

n = 3
console.log(fib(n), 2)

n = 4
console.log(fib(n), 3)