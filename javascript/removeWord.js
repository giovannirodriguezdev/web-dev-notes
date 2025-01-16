let removeEWords = function(sentence) {
    let words = sentence.split(' ');

    let newSentence = [];
    for(let i = 0; i < words.length; i++) {
        let word = words[i];
        // if the word doesn't include 'e' it is pushed 
        if(!word.toLowerCase().includes('e')) {
            newSentence.push(word);
        }
    }
    return newSentence.join(' ');
};

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
console.log(removeEWords('Who will win when the champs lose?'));
