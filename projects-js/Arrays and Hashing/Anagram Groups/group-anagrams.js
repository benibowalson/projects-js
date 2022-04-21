

const validAnagram = require('../Anagram Valid/valid-anagram')

const groupAnagrams = (words) => {

    if(words === []) return [[]]
    if(words === [[""]]) return [[""]]
    if(words.length === 1) return [words]

    const foundAnagrams = new Set()
    const anagramGroups = []

    while(words.length > 0){
        const firstWord = words.shift()
        if(foundAnagrams.has(firstWord)) continue
        foundAnagrams.add(firstWord)

        const curAnagrams = [firstWord]
        for(let i = 0; i < words.length; i++){
            if(validAnagram.isValidAnagram(firstWord, words[i])){
                curAnagrams.push(words[i])
                foundAnagrams.add(words[i])
            }            
        }

        anagramGroups.push(curAnagrams)
    }

    return anagramGroups
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))