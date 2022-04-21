

const reverseNumber = (intNumber) => {
  let result = 0
  let i = intNumber
  while(i > 0){      
      const rem = i % 10
      result = result * 10 + rem
      i = Math.floor(i / 10)
  }

  return result
}

const reverseNumber2 = (intNumber) => {
  let result = 0
  for(i = intNumber; i > 0; i = Math.floor(i / 10)) result = result * 10 + (i % 10)
  return result
}

console.log(reverseNumber3(321))
