/**
 * @param {number[]} T
 * @return {number[]}
 */
const dailyTemperatures = T => {
    // brute force, too slow O(n^2)
    const store = new Array(T.length).fill(0)

    for (let i = 0 ; i<T.length; i ++) {
        let pointer = i
        while (T[pointer] <= T[i]) {
            pointer++
            if (T[pointer] > T[i]){
                store[i] = pointer - i
            }
        }  
    }
    return store
    
};

const dailyTemperaturesStack = T => {
    const stack = [0]
    const result = new Array(T.length).fill(0)

    // keep stacking the indexes as long as the previous pushed item is less than T[i]
    // once we see that T[i] > T[top of Stack] start popping until T[i] < T[top of Stack] or until stack is 0
    // push the i into the stack to start comparing again.
    for (let i=1; i<T.length; i++) {
        while (stack.length > 0 && T[stack[stack.length-1]] < T[i]) {
            result[stack[stack.length-1]] = i - stack[stack.length-1]
            stack.pop()
        }
        stack.push(i)
        console.log(stack)
    }


    return result
};
//       0    1   2   3   4   5   6   7
//                                    i
let t = [73, 74, 75, 71, 69, 72, 76, 73]
//                
//  
// stack = []
console.log(dailyTemperatures(t), [1, 1, 4, 2, 1, 1, 0, 0])
console.log(dailyTemperaturesStack(t), [1, 1, 4, 2, 1, 1, 0, 0])