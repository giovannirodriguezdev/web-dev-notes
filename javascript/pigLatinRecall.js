// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

function pigLatinWord(word) {
    let vowel = 'aeiou';

    if (vowel.includes(word[0])) {
        return word + 'yay';
    } else {
        let i = 0;
        while (vowel.includes(word[i])) {
            i++
        }
        let firstChar = word.slice(0, i);
        let restOfWord = word.slice(i);
        return restOfWord + firstChar + 'ay';
    }
  };
  
  console.log(pigLatinWord("apple")); //=> "appleyay"
  console.log(pigLatinWord("eat")); //=> "eatyay"
  console.log(pigLatinWord("banana")); //=> "ananabay"
  console.log(pigLatinWord("trash")); //=> "ashtray"
