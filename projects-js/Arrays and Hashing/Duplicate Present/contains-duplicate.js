
const containsDuplicates = (nums) => {
    const mySet = new Set()
    for(let i = 0; i < nums.length; i++){       // nums.forEach WON'T WORK
        if(mySet.has(nums[i])) return true
        mySet.add(nums[i])
    }

    return false
}

console.log(containsDuplicates([1,2,3,1]))