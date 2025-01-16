
function eitherStringIncluded(sentence, word1, word2) {
    let firstWord = sentence.includes(word1);
    let secondWord = sentence.includes(word2);

    if (firstWord || secondWord) {
        return true;
    }
    return false;
}

console.log(eitherStringIncluded("how now brown cow?", "panther", "cow")); //=> true
console.log(eitherStringIncluded("Question?", "Answer", "?")); //=> true
console.log(eitherStringIncluded("I love programming", "apple", "potato")); //=> false
console.log(eitherStringIncluded("Dance party!", "?", "what")); //=> false
