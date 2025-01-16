// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'






function pigLatinWord(word) {
    let vowel = 'aeiou';
    // checking if the first letter in word is a vowel 
    if (vowel.includes(word[0])) {
        return word + 'yay';
    }
    // counting each word 
    for (let index = 0; index < word.length; index++) {
        let letter = word[index];
        // once vowel is found it reconstructed 
        if(vowel.includes(letter)) {
                // first word is sliced at the vowel 
            let firstWord = word.slice(index);
                // second word sliced from 0 index to the index(vowel)
            let secondWord = word.slice(0, index);
            return firstWord + secondWord + 'ay';
        }
    }
    
  };
  
  console.log(pigLatinWord("apple")); //=> "appleyay"
  console.log(pigLatinWord("eat")); //=> "eatyay"
  console.log(pigLatinWord("banana")); //=> "ananabay"
  console.log(pigLatinWord("trash")); //=> "ashtray"
