
const twoSumSorted = (sortedNums, targetSum) => {

    [leftIndex, rightIndex] = [0, sortedNums.length - 1]
    
    while(leftIndex < rightIndex){
        if(sortedNums[leftIndex] + sortedNums[rightIndex] < targetSum){
            leftIndex += 1
        } else if(sortedNums[leftIndex] + sortedNums[rightIndex] > targetSum){
            rightIndex -= 1
        } else {
            return [leftIndex + 1, rightIndex + 1]
        }
    }

    return [-1, -1]
}