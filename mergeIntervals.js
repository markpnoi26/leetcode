/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {

    const dp = []
    ans = []

    for (let int of intervals) {
        let start = int[0]
        let end = int[1]

        while (start < end) {
            dp[start] = "overlap"
            start++
        }
        dp[int[1]] = dp[int[1]] === "overlap"? "overlap":"end"
    }

    let currRange = []
    
    for (let i =0 ;i<=dp.length; i++) {
        if (dp[i] === "overlap" && currRange.length === 0) {
            currRange.push(i)
        } else if (dp[i] === "end" && currRange.length === 1) {
            currRange.push(i)
            ans.push(currRange)
            currRange = []
        } else if (dp[i] === "end" && currRange.length === 0) {
            currRange.push(i)
            currRange.push(i)
            ans.push(currRange)
            currRange = []
        }
    }

    return ans
};

const mergeNlogN = intervals => {
    if (intervals.length === 0) return []

    intervals.sort((a,b) => a[0]-b[0])
    const answer = []
    let currInterval = intervals[0][0]
    let currMaxInterval = intervals[0][1]

    for (let i=1;i<intervals.length; i++) {
        if (intervals[i][0] <= currMaxInterval || intervals[i][1] <= currMaxInterval) {
            currMaxInterval = Math.max(currMaxInterval, intervals[i][1])
        } 
        if (intervals[i][0] > currMaxInterval) {
            answer.push([currInterval, currMaxInterval])
            currInterval = intervals[i][0]
            currMaxInterval = intervals[i][1]
        }
    }
    answer.push([currInterval, currMaxInterval])

    return answer
};


let input = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
]
let output = [
    [1, 6],
    [8, 10],
    [15, 18]
]

console.log(merge(input), output)

input = [
        [1, 4],
        [4, 5]
    ]
output = [
    [1, 5]
]

console.log(merge(input), output)

input = [
    [1, 4],
    [5, 6]
]

output = [
    [1, 4],
    [5, 6]
]

console.log(merge(input), output)


input = [
    [1, 4],
    [0, 0]
]
output = [
    [0, 0],
    [1, 4]
]
console.log(merge(input), output)