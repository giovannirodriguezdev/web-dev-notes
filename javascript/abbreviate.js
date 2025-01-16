/* Write a function abbreviate(word) that takes in a string arg. The function should return a new string where all of its vowels are removed.
 */

let abbreviate = function(word) {
    let vowel = 'aeiou';
    let newWord = '';

    for(let i = 0; i < word.length; i++) {
        let words = word[i];

        if(!vowel.includes(words.toLowerCase())) {
            newWord += words;
        }
    }
    return newWord;
}

console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'
