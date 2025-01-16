function eCounter(word) {
    let count = 0;
  
    for (let index = 0; index < word.length; index++) {
      let char = word[index];
      if (char === "a" || char === "A") {
        count += 1;
      }
    }
    return count;
  }
  
  console.log(eCounter("apple")); // => 1
  console.log(eCounter("appleapple")); // => 2
  console.log(eCounter("Appleee")); // => 3


  function eCounter(word) {
    let index = 0;
    let count = 0;

    while(index < word.length) {
      let char = word[index];
      if (char === 'e' || char === 'E'){
        count++;
      }
      index++;
    }
    return count;
  }

  // console.log(eCounter("apple")); // => 1
  // console.log(eCounter("appleapple")); // => 2
  // console.log(eCounter("Appleee")); // => 3
