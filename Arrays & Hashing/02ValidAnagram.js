{/*
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.
*/}

const isAnagram = (s, t) => {
    const obj = {}
    for (const char of s){
        if (!(char in obj)) {
            obj[char] = 1
        } else {
            obj[char]++
        }
    }

    for (const char of t) {
        if (!(char in obj)) {
            return false
        } else {
            obj[char]--
        }
    }

 for (const key in obj) {
        if (obj[key] < 0) {
            return false
        } 
    }

    return true;
};