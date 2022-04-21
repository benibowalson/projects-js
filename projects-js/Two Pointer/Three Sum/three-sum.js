
const threeSum = (nums, targetSum) => {
    if(nums.length < 3) return []

    const results = []
    const sortedNums = nums.sort((a, b) => a - b)
    for(let i = 0; i < sortedNums.length; i++){

        if(i > 0 && sortedNums[i] == sortedNums[i - 1]) continue
        
        [leftIndex, rightIndex] = [i + 1, sortedNums.length - 1]
        while(leftIndex < rightIndex){
            if(sortedNums[i] + sortedNums[leftIndex] + sortedNums[rightIndex] < targetSum){
                leftIndex += 1
            } else if(sortedNums[i] + sortedNums[leftIndex] + sortedNums[rightIndex] > targetSum){
                rightIndex -= 1
            } else {
                results.push([sortedNums[i], sortedNums[leftIndex], sortedNums[rightIndex]])
                leftIndex += 1
                while(sortedNums[leftIndex] === sortedNums[leftIndex - 1] && leftIndex < rightIndex){
                    leftIndex += 1
                }
            }
        }
    }

    return results
}

console.log(threeSum([0,1,2,3,5,7,9], 10))