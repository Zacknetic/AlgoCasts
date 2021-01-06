// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n, row = 0, stair = '') {
    //reached end, so exit
    if(row === n ){
        return;
    }

    if(stair.length + 1 >= n - row && stair.length + 1 <= n + row){
        stair += '#';
    } else {
        stair += ' ';
    }

//three cases, add a '#', add a ' ', or change to a new row
//next row
if(stair.length === (2 * n) - 1){
    console.log(stair);
    return pyramid(n, row + 1, '');
}

pyramid (n, row, stair);
}
module.exports = pyramid;
