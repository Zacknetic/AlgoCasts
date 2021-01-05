// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);

}

function cleanString(str){
return str.toLowerCase().replace(/[^\w]/g, '').split('').sort().join('');
}
//console.log(anagrams('hello', 'llohe'));
//console.log(anagrams('Rail! Safbbety!', 'fairy tales'));
module.exports = anagrams;
/*

function anagrams(stringA, stringB) {

    const charMapA = getCharMap(sanitizeString(stringA));
    const charMapB = getCharMap(sanitizeString(stringB));
    
    if(objLength(charMapA) !== objLength(charMapB)){
        return false
    }

    for(const char in charMapA){
        console.log(charMapB[char]);
        if(charMapA[char] !== charMapB[char])
        return false;
    }
    return true;
}

function objLength(obj){
    objectLength = Object.keys(obj).length;
    return objectLength;
}

function sanitizeString(str){
    return str.toLowerCase().replace(/[^\w]/g, '');
}

function getCharMap(str) {
    const charMap = {};
    for (let char of str){
        if(char) {
            charMap[char] = charMap[char] + 1 || 1;
        }
    
    }
    return charMap;
}*/