let longWords = function(words) {
    let longestWords = [];

    for(let i = 0; i < words.length; i++) {
        let word = words[i];
        // searching array for words greater than 5 
        if(word.length > 5) {
            longestWords.push(word);
        }
    }
    return longestWords;
};

console.log(longWords(['bike', 'skateboard', 'scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]
