
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
    if(matrix == [] || matrix == undefined){
        return result;
    } else {
        for (a = 0; a < matrix.length; a++){
            for (b = 0; b < matrix[a].length; b++){
                if (a % 2 == 0){
                    result.push(matrix[a][b]);
                } else {
                    result.push(matrix[a][matrix[a].length - 1 - b]);
                }
            }
        }
    }
  return result;
}
