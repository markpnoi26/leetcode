/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
const maxScore =  (cardPoints, k) => {
    let p1 = 0
    let p2 = cardPoints.length - 1
    let maxVal = 0
    const potentialWindow = [cardPoints[p2], cardPoints[p1]]


    for (let i = 1; i < k; i++) {
        potentialWindow.unshift(cardPoints[p2 - i])
        potentialWindow.push(cardPoints[p1 + i])
    }

    let currVal = 0
    for (let i = 0; i < potentialWindow.length; i++) {
        if (i < k) {
            currVal += potentialWindow[i]
        } else {
            currVal += potentialWindow[i]
            currVal -= potentialWindow[i - k]
        }
        maxVal = Math.max(maxVal, currVal)
    }

    return maxVal
};