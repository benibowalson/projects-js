
const twoSum = (nums, target) => {
    if(nums === null) return [-1, -1]

    const mapOfNums = new Map()
    for(let i = 0; i < nums.length; i++){
        if(mapOfNums.has(nums[i])) return [mapOfNums.get(nums[i]), i]
        mapOfNums.set(target - nums[i], i)
    }

    return [-1, -1]
}

console.log(twoSum([1, 2, 5, 7], 4))