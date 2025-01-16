// 1. determine if given word is withing array using indexOf  
// 2. check if result from step 1 is a valid index (not -1) 
// 3. return true of false based on step 2 result 


function wordWithinArray(array, word) {
    let wordIndex = array.indexOf(word);

    if (wordIndex === -1) {
        return false;
    }
    return true;
}

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "apple")
); //=> true

console.log(wordWithinArray(
  ["dog", "cat", "camel", "bird"], "camel")
); //=> true

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "pineapple")
); //=> false

console.log(wordWithinArray(
  ["dog", "cat", "camel", "bird"], "panther")
); //=> false
