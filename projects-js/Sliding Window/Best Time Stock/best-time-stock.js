
const maxProfit = (prices) => {
    let maxPro = 0;

    [buyIndex, sellIndex] = [0, 1];
    while(sellIndex < prices.length){
        // profit
        if(prices[buyIndex] < prices[sellIndex]){
            const profit = prices[sellIndex] - prices[buyIndex]
            maxPro = Math.max(maxPro, profit)
        } else {
            buyIndex = sellIndex
        }

        sellIndex += 1
    }

    return maxPro
}

console.log(maxProfit([7,1,5,3,6,4]))