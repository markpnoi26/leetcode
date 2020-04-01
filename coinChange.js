/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
    let minCoin = -1
    const store = {}

    for (let i=0; i<coins.length; i++) {
        const num = Math.floor(amount/coins[i])
        console.log(num)
        console.log()
    }
};

// incomplete
// need dp approach


let coins = [1, 2, 5], amount = 11
console.log(coinChange(coins, amount), 3)

coins = [2], amount = 3
console.log(coinChange(coins, amount) -1)