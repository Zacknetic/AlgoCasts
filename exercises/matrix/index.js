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

function matrix(n, results = [], ){
    for (let i = 0; i < n; i++){
        results.push([])
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startColumn <= endColumn && startRow <= endRow){
        for(let i = startColumn; i <= endColumn; i++){
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;
        for(let i = startRow; i <= endRow; i++){
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;

        for(let i = endColumn; i >= startColumn; i--){
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;
        for(let i = endRow; i >= startRow; i--){
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }
return results;
}

module.exports = matrix;
/*
function matrix(n, row = [0, n - 1], column = [0, n - 1], polarity = 1, count = 1, matrixSpiral = []) {
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
}*/