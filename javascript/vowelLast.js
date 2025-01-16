let lastVowel = function (str) {
    let vowel = 'aeiou';

    for (let i = str.length - 1; i >= 0; i--) {
        let word = str[i];

        if (vowel.includes(word.toLowerCase())) {
            return word;
        }
    }
    return null;
}

console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null
