/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {

    let left = 0
    let right = height.length-1
    let maxArea = (right - left) * Math.min(height[left], height[right])


    while (left !== right) {
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }

        let area = (right - left) * Math.min(height[left], height[right])
        maxArea = Math.max(area, maxArea)
    }

    return maxArea
    
    
};


let ht = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(ht), 49)

ht = [1,3,2,5,25,24,5]
console.log(maxArea(ht), 24)