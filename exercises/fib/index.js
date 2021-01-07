// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//iterative solution : Runtime Complexity: O(n) because for every n, we are running one operation
/*
function fib(n){
    const result = [0,1];
    for (let i = 2; i <= n; i++){
        const a = result[i - 1];
        const b = result[i - 2];

        result.push(a+b);
    }

    return result[n];

}
//igor's recursive solution
function fib(n) {
    if(n<=1){
        return n;
    }
    return fib(n - 1) + fib(n - 2);

}
*/
//zack's recursive solution is it faster?
function fib(n, list = [0,1]) {
    if( n <= 1){
        return list[1];
    } 
    return fib(n - 1, [list[1], list[0] + list[1]]);
}

module.exports = fib;
