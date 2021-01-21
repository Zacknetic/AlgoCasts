// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/*
function palindrome(str) {
    return (str === reverseString(str));
}*/

/*
function palindrome(str) {
    return str.split('').every((character, i) => {
        return character === str[str.length - i - 1];
    });
}*/

function reverseString(arr){ //good, now we get a variable for free! kinda :D


    let reverse = '';
    for( let i = 0; i < arr.length ; i++){ //exit will be here, then we skip the entire loop. 
      //now that we iterate through the array, we need to store the new values somehow. lets copy how we did it before
      reverse =  arr[i] + reverse;  /// where did we every define char? : good : didn't //now what, we need to build this string so...// two problems. First arr[3] is undefined. second problem: it will output arr[2] every time. good//...? arr  : how do we get a value out of an array?  arr[x] 
  //  i.toString(''); // no need. 
    }
    
    for( let i = 0; i < arr.length; i++){
      arr[i] = reverse[i];
    }
  
  
  }

  console.log(reverseString('stuff'));

/*
function reverseString(str){
    return str.split('').reduce((reversed, character) => {
        return character + reversed;
    },'');
}*/

module.exports = palindrome;