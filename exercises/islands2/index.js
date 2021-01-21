/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid, y = 0, x = 0, numberOfIslands = 0) {
   
    if( grid[0] == null || grid.length === 0 || !grid){
        return 0;
    } 

    
    if(grid[y][x] === '1'){

         numberOfIslands++;
         grid[y][x] = '2';
         findNeighbors(grid, y, x);
    }
    if(x === grid[0].length -1 && y === grid.length -1){
        return numberOfIslands;
    } else if (x === grid[0].length - 1 && grid[0].length > 1){
        return numIslands(grid, y + 1, 0, numberOfIslands)
    } else {
        return numIslands(grid, y, x + 1, numberOfIslands)  
    }
};
    

function findNeighbors(grid, y, x){
    if(y-1 >= 0){
    if(grid [Math.max(0, (y - 1))][x] === '1'){
        grid [Math.max(0, y - 1)] [x] = '2';
   
            findNeighbors(grid, Math.max(0, y - 1), x);
        }
    }
    if (y+1 <= grid.length -1){
    if(grid [Math.min(grid.length - 1, y + 1)] [x] === '1'){
        grid [Math.min(grid.length - 1, y + 1)] [x] = '2';
     
            findNeighbors(grid, Math.min(grid.length - 1, y + 1), x);
        }
       
        
    }
    if(x-1 >= 0){
    if(grid [y]  [Math.max(0, (x - 1))] === '1'){
        grid [y] [Math.max(0, (x - 1))] = '2';
      
            findNeighbors(grid, y, Math.max(0, (x - 1)));
        }
     
    }
    if (x + 1 <= grid.length -1){
    if(grid [y]  [Math.min(grid[0].length - 1, x + 1)] === '1'){
        grid [y]  [Math.min(grid[0].length - 1, x + 1)] = '2';
     
            findNeighbors(grid, y, Math.min(grid[0].length - 1, (x + 1)));
        }  
    }
}

module.exports = numIslands;


console.log(numIslands(
    [ ["1","1"]]));

module.exports = numIslands;
