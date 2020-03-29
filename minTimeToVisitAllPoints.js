/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let minTime = 0
    
    for (let i = 0 ; i < points.length-1; i ++) {
        const targetX = points[i+1][0]
        const targetY = points[i+1][1]
        
        let currX = points[i][0]
        let currY = points[i][1]
        
        while (currX !== targetX || currY !== targetY) {
            
            if (currX < targetX) {
                currX++
            } else if (currX > targetX) {
                currX--
            }
            
            if (currY < targetY) {
                currY++
            } else if (currY > targetY) {
                currY--
            }
            
            minTime++
        }
        
        
    }
    
    return minTime
};


let points = [[1,1],[3,4],[-1,0]]
console.log(minTimeToVisitAllPoints(points), 7)

let points1 = [[3,2],[-2,2]]
console.log(minTimeToVisitAllPoints(points1), 5)