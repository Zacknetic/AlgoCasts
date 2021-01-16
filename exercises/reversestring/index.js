// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*
function reverse(str){
   return str.split('').reduce((reversed, character) => {
        return character + reversed;
    },'');
}*/


function reverse(str){
    let arr = str.split('');
    let first = '';
    let end = ''
    
  for(let i = 0; i < Math.round(arr.length / 2); i++){
      first = arr[i];
      end = arr[arr.length - (1 + i)];
      arr[i] = end;
      arr[arr.length - (1 + i)] = first;
    }

    return arr.join('');
  }

/*
function reverse(str){
    return str.split('')
    .reverse()
    .join('');
}*/
/*
function reverse(str) {
    let reversed = '';
 for(let character of str){
     reversed = character + reversed;
 }
 return reversed;
}*/
reverse('asdf');
module.exports = reverse;
