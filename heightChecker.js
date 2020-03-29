/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let numStudents = 0

    const original = [...heights]
    heights.sort((a,b) => a-b) 

    for (let i =0; i<heights.length; i++) {
        if (heights[i] !== original[i]) numStudents++
    }

    return numStudents
};

let heights = [1,1,4,2,1,3]
console.log(heightChecker(heights), 3)

heights = [5,1,2,3,4]
console.log(heightChecker(heights), 5)

heights = [1,2,3,4,5]
console.log(heightChecker(heights), 0)