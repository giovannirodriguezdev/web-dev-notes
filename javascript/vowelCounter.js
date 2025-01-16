/* Write a function, countVowels(word), that takes in a string word and returns the number of vowels in the word. 
Vowels are the letters "a", "e", "i", "o", "u".
 */

function countVowels(word) {
    // your code here...
    let vowelCount = 0;

    for(let i = 0; i <  word.length; i++) {
        let letter = word[i];

        if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            vowelCount++;
        }
    }
    return vowelCount;
}
//     let vowelCount = 0;
//     let i = 0;
    
//     while(i < word.length) {
//         let letter = word[i];

//         if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
//             vowelCount++;
//         }
//         i++;
//     }
//     return vowelCount;
//   }
  
  console.log(countVowels("bootcamp")); // => 3
  console.log(countVowels("apple")); // => 2
  console.log(countVowels("pizza")); // => 2
