// 2D arrays use loops within a loop 

let array = [["a", "b", "c"], ["d", "e"], ["f", "g", "h"]];

for (let i = 0; i < array.length; i++) {
  let subArray = array[i];
  console.log('array', subArray);

  for (let j = 0; j < subArray.length; j++) {
    console.log('sub', subArray[j]);
  }
}

// 2D array are useful for grid type applications ie: tic-tac-toe, chess, excel 


