// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


function reverseInt(n) {
    const reversed = parseInt(reverseString(n.toString()));

    return (reversed * Math.sign(n));

}

function reverseString(str){
    return str.split('').reduce((reversed, character) => {
        return character + reversed;
    },'');
}

module.exports = reverseInt;
