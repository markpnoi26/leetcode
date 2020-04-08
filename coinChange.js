/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
    // still slow
    coins.sort((a,b)=> b-a)
    let min = Infinity

    const coinMutate = (coins, currCount, currAmount, targetAmount) => {
        // if (currAmount > targetAmount) return

        if (currAmount === targetAmount) {
            console.log(currCount)
            min = currCount
        }

        if (currAmount <= targetAmount) {
            let coinsLen = coins.length
            recursiveFor: for (let i = 0; i < coinsLen; i++) {
                currCount++
                currAmount += coins[i]
                if (currCount > min) break recursiveFor
                coinMutate(coins.slice(i), currCount, currAmount, targetAmount)
                currCount--
                currAmount -= coins[i]
            }
        }
    }

    coinMutate(coins, 0, 0, amount)

    return(min === Infinity? -1:min)
}




let coins = [1, 2, 5], amount = 11
console.log(coinChange(coins, amount), 3)

coins = [2], amount = 3
console.log(coinChange(coins, amount), -1)

coins = [1], amount = 0
console.log(coinChange(coins, amount), 0)

coins = [227, 99, 328, 299, 42, 322], amount = 9847 
console.log(coinChange(coins, amount), 31)

coins = [288, 160, 10, 249, 40, 77, 314, 429], amount = 9208
console.log(coinChange(coins, amount), 22)

coins = [338, 26, 303, 41, 167, 331, 485, 239, 332], amount = 8966
console.log(coinChange(coins, amount), 20)