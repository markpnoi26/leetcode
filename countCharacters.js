/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */

var countCharacters = function(words, chars) {
    const store = {}
    let strChars = 0
    for (let i =0; i<chars.length ; i++) {
        if (store[chars[i]] === undefined) {
            store[chars[i]] = 1
        } else {
            store[chars[i]]++
        }
    }

    for (let i =0 ; i< words.length; i++) {
        let wordLen = words[i].length
        const copyStore = {...store}
        for (let j=0; j< wordLen; j++) {
            let letter = words[i][j]
            if (copyStore[letter] !== undefined && copyStore[letter] > 0) {
                copyStore[letter]--
            } else {
                break
            }

            if (j === wordLen-1) {
                strChars += wordLen
            }
        }
    }

    return strChars
};

let words = ["cat","bt","hat","tree"], chars = "atach"
console.log(countCharacters(words, chars), 6)

words = ["hello","world","leetcode"], chars = "welldonehoneyr"
console.log(countCharacters(words, chars), 10)