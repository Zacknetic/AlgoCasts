// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0
//const vowelsList = ['a', 'e', 'i', 'o', 'u'];

function vowels(str) {

    const matches = str.match(/[aeiou]/gi);

    return matches ? matches.length : 0;
}

/*
function vowels(str) {
    let vowelsCount = 0;
    const matches = str.match(/[aeiou]/gi);
    if(matches !== null){
        vowelsCount = matches.length;
    }
    return vowelsCount;
}*/


/*
function vowels(str) {
    let vowelsCount = 0;
    for (let letter of str){
        if (vowelsList.includes(letter.toLowerCase())){
            vowelsCount++;
        }
    }
    return vowelsCount;
}*/

module.exports = vowels;
