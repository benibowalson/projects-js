

const topKFrequent = (nums, k) => {

    const freqMap = new Map()
    for(let i = 0; i < nums.length; i++){
        if(!freqMap.has(nums[i])){
            freqMap.set(nums[i], 1)
        } else {
            freqMap.set(nums[i], freqMap.get(nums[i]) + 1)
        }
    }

    const sortedMap = new Map([...freqMap].sort((a, b) => b[1] - a[1])) // Descending
    return Array.from(sortedMap.keys()).slice(0, k)
}

console.log(topKFrequent([1,1,1,2,2,3], 1))
