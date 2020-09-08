/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
const minDays = (bloomDay, m, k) => {

    const arrLen = bloomDay.length
    if (m * k > arrLen) return -1
    let min = 1
    let max = Math.max(...bloomDay)
    if (m * k === arrLen) return max


    // max goes down by one if its possible to make all boquets at that day
    // min goes to mid if it is not possible to make all the boquets 

    while (min < max) {
        let midDay = Math.floor((min + max) / 2)
        let flower = 0, bouquet = 0

        // console.log(midDay)
        for (let i = 0; i < bloomDay.length; i++) {
            if (midDay >= bloomDay[i]) {
                flower++
                if (flower >= k) {
                    bouquet++
                    flower = 0
                }
            } else {
                flower = 0
            }
        }

        if (bouquet >= m) {
            max = midDay-1
        } else {
            min = midDay+1
        }
    }


    return min

};

console.log(minDays([1, 10, 3, 10, 2],3,1))
console.log(minDays([1, 10, 2, 9, 3, 8, 4, 7, 5, 6], 4, 2))
