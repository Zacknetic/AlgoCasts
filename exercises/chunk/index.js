// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const overChunk = [];
    let subChunk = [];
    for (let i = 0; i < array.length; i++){
         //if chunk size limit is reached
         if(subChunk.length >= size){
            //add subChunk to overChunk
            //clear the subChunk
             overChunk.push(subChunk);
             subChunk = [];
         }
        //add current number to subChunk       
         subChunk.push(array[i]);
        }
        //catch the half full subArray at the end
        if(subChunk.length > 0) {
            overChunk.push(subChunk)
        }
    return overChunk

}

//chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);
module.exports = chunk;
