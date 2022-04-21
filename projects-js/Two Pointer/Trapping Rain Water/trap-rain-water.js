
const trap = (heights) => {
    // trappedWater[i] = min(LeftMax, RightMax) - heights[i]
    
    if(heights.length === 0) return 0

    let trappedWater = 0;
    [leftIndex, rightIndex] = [0, heights.length - 1];
    [leftMax, rightMax] = [heights[leftIndex], heights[rightIndex]];

    while(leftIndex < rightIndex){
        if(leftMax <= rightMax){
            leftIndex += 1
            leftMax = Math.max(leftMax, heights[leftIndex])
            trappedWater += leftMax - heights[leftIndex]
        } else {
            rightIndex -= 1
            rightMax = Math.max(rightMax, heights[rightIndex])
            trappedWater += rightMax - heights[rightIndex]
        }
    }

    return trappedWater
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))