/* Write a function removeLastVowel(word) that takes in a string and returns the string with its last vowel removed. */

let removeLastVowel = function(word) {
    let vowel = 'aeiou';

    for(let i = word.length - 1; i >= 0; i--) {
        let singleWord = word[i];

        if(vowel.includes(singleWord)) {
            return word.slice(0, i) + word.slice(i + 1);
        }
    }
    return word; //if no voewl is found, return the word

}

console.log(removeLastVowel('Forrest'));
