function riverSizes(matrix) {
    // Write your code here.
      let rivers = []
      
      for (let i=0; i<matrix.length; i++) {
          for (let j=0; j<matrix[i].length;j++) {
              if (matrix[i][j] === 1) {
                  rivers.push(dfsCount(matrix, i, j))
              }
          }
      }
      
      return rivers.sort()
  }
  
  function dfsCount(matrix, i, j) {
      matrix[i][j] = 0
      let count = 1
      
      if (i > 0 && matrix[i-1][j] === 1){
          count += dfsCount(matrix, i-1, j )
      }
      if (i < matrix.length-1 && matrix[i+1][j] === 1) {
          count += dfsCount(matrix, i+1, j)
      }
      if (j > 0 && matrix[i][j-1] === 1) {
          count += dfsCount(matrix, i, j-1)
      }
      if (j < matrix[i].length-1 && matrix[i][j+1] === 1) {
          count += dfsCount(matrix, i, j+1)
      }
      
      return count
  }
  

  const testInput = [
    [1, 0, 0, 1],
    [1, 0, 1, 0],
    [0, 0, 1, 0],
    [1, 0, 1, 0],
  ];

 console.log(riverSizes(testInput), [1, 1, 2, 3])