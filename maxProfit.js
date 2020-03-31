/**
 * @param {number[]} prices
 * @return {number}
 */
 // O(n^2)
// const maxProfit = prices => {
//     let max = 0
//     for (let i =0; i<prices.length; i++) {
//         for (let j=i+1; j<prices.length; j++) {
//             let soldPrice = prices[j] - prices[i]
//             max = Math.max(soldPrice, max)
//         }
//     }

//     return max
// };

// O(n) time 
const maxProfit = prices => {
    let maxProf = 0;
    let min = Infinity;
    for(let i = 0; i < prices.length; i++) {
        
        min = Math.min(min, prices[i]);
        maxProf = Math.max(maxProf, prices[i] - min);
        // max is the current max profit 

        console.log("min",min,"maxProf", maxProf)
    }    
    
    return maxProf;
};

let prices = [7,1,5,3,6,4]
console.log(maxProfit(prices), 5)

prices = [7,6,4,3,1]
console.log(maxProfit(prices), 0)