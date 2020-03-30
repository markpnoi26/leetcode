function largestRange(array) {
    // Write your code here.
      
      let store = {}
      let maxRangeCt = -Infinity
      let maxRange = []
      for (let i=0; i< array.length; i++) {
          if (store[array[i]] === undefined) {
              store[array[i]] = true
          } else {
              store[array[i]] = true
          }
      }
      
      for (let i=0; i<array.length; i++) {
          let start = array[i]
          let end = array[i]
          let currRange = 1
          
          while (store[end+1]) {
              end++
              currRange++
          }
          if (currRange > maxRangeCt) {
              maxRangeCt = currRange
              maxRange = [start, end]
          }
      }
      
      return maxRange
  }

  
  let arr = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
  console.log(largestRange(arr), [0, 7])

  arr = [8, 4, 2, 10, 3, 6, 7, 9, 1]
  console.log(largestRange(arr), [6, 10])


  arr =[0, 9, 19, -1, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, 8, 7, 6, 15, 12, 12, 2, 1, 6, 13, 14]
  console.log(largestRange(arr), [-1, 19])