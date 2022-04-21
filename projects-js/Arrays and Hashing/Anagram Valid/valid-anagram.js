
const isValidAnagram = (str, target) => {

    if(str === target) return true
    if(str.length !== target.length) return false

    const freqMapStr = new Map()
    const freqMapTgt = new Map()
    for(let i = 0; i < str.length; i++){
        if(freqMapStr.has(str.charAt(i))){
            freqMapStr.set(str.charAt(i), freqMapStr.get(str.charAt(i)) + 1)
        } else {
            freqMapStr.set(str.charAt(i), 1)
        }

        if(target.indexOf(str.charAt(i)) < 0) return false
        if(freqMapTgt.has(target.charAt(i))){
            freqMapTgt.set(target.charAt(i), freqMapTgt.get(target.charAt(i)) + 1)
        } else {
            freqMapTgt.set(target.charAt(i), 1)
        }
    }

    const keysArray = Array.from(freqMapStr.keys())
    for(let i = 0; i < keysArray.length; i++){
        if(!freqMapTgt.has(keysArray[i])) return false
        if(freqMapStr.get(keysArray[i]) !== freqMapTgt.get(keysArray[i])) return false
    }

    /* for(aKey in freqMapStr){
        if(!freqMapTgt.has(aKey)) return false
        if(freqMapStr.get(aKey) !== freqMapTgt.get(aKey)) return false
    } */

    return true
}

module.exports = { isValidAnagram }