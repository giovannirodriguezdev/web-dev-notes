/* Write a function abbreviateWords(sentence) that takes in a sentence string. The function should return a new sentence where words that are longer than 4 characters have their vowels removed. Hint: Consider creating a helper function to remove all vowels in a string. */

let removeVowels = function(word) {
    let vowel = 'aeiou';
    let newSentence = '';

    for (let index = 0; index < word.length; index++) {
        let element = word[index];

        if(!vowel.includes(element.toLowerCase())) {
            newSentence += element;
        }
        
    }
    return newSentence;
};

let abbreviateWords = function(sentence) {
    let words = sentence.split(' ');
    let newWords = [];

    for(let i = 0; i < words.length; i++) {
        let word = words[i];

        if(word.length > 4) {
            newWords.push(removeVowels(word));
        } else {
            newWords.push(word);
        }
    }
    return newWords.join(' ');
};

console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg
