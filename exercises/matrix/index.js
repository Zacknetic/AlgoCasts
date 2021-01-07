// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n, row = [0, n], column = [0, n], polarity = 1, count = 1, matrixSpiral = []) {
    const matrixSize = n * n;
    if(count === matrixSize){
        return;
    }
    if (polarity > 0){
        for (row[0] < row[1]; row[0] += polarity;){
            matrixSpiral[[row[0]][column[0]]] = count;
            count++;
        }
        for (column[0] < column[1]; column[0] += polarity;){
            matrixSpiral[[row[0]][column[0]]] = count;
            count++;
        }
    } else {
        for (row[0] > 0; row[0] += polarity;){
            matrixSpiral[[row[0]][column[0]]] = count;
            count++;
        }
        for (column[0] > 0; column[0] += polarity;){
            matrixSpiral[[row[0]][column[0]]] = count;
            count++;
        }
        
    }
    polarity = polarity * -1;
    column[1]--;
    row[1]--;

    matrix(n, row, column,polarity,count + 1,matrixSpiral)
}

module.exports = matrix;
