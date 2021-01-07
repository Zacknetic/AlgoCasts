// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


//Runtime Complexity O(n)  Reasoning: iterating through a collection once.
function maxChar(str) {
    let maxChar = 'a';
    const charMap = {};

    for (let char of str){
        charMap[char] = charMap[char] + 1 || 1;
        if(charMap[char] > charMap[maxChar]) {
            maxChar = char;
        }
    }

    return maxChar;

}

module.exports = maxChar;
