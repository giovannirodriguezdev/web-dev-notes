/* Write a function longestWord(sentence) that takes in a sentence string as an argument. The function should return the longest word in the sentence. If there is more than one "longest word", return the first of these instances. */

let longestWord = function(sentence) {
    let arr = sentence.split(' ');
    let longWord = '';

    for(let i = 0; i < arr.length; i++) {
        let el = arr[i];
        
        if(el.length > longWord.length) {
            longWord = el;
        }
    }
    return longWord;

}


console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''
