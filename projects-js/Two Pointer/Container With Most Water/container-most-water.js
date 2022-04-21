
const maxAreaOfWater = (heights) => {

    let maxArea = 0;
    [leftIndex, rightIndex] = [0, heights.length - 1]
    
    while(leftIndex < rightIndex){
        const curArea = (rightIndex - leftIndex) * Math.min(heights[leftIndex], heights[rightIndex])
        if(curArea > maxArea) maxArea = curArea
        if(heights[leftIndex] <= heights[rightIndex]){
            leftIndex += 1
        } else {
            rightIndex -= 1
        }
    }

    return maxArea
}

console.log(maxAreaOfWater([1,8,6,2,5,4,8,3,7]))