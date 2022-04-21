
const productExceptSelf = (nums) => {
    const productsArray = []
    let prefix = 1
    for(let i = 0; i < nums.length; i++){
       productsArray[i] = prefix
       prefix *= nums[i]
    }

    let postfix = 1
    for(let i = nums.length - 1; i >= 0; i--){
        productsArray[i] *= postfix
        postfix *= nums[i]
    }

    return productsArray
}

console.log(productExceptSelf([-1,1,0,-3,3]))