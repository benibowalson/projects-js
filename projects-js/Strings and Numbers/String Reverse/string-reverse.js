
const now1 = new Date().getTime();
console.log(now1)

const reverseString = (str) => {
    if(str === "") return ""
    if(str.length === 1) return str

    return reverseString(str.substring(1)) + str.substring(0, 1)
}

console.log(reverseString('noslaW obineB'))
const now2 = new Date().getTime();
console.log(now2)
console.log(now2 - now1)
