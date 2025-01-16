/* Write a function reverseString(str) that takes in a string. The function should return a new string where the order of the characters is reversed. */

function reverseString(str) {
    let reversed = "";

    for(let index = str.length - 1; index >= 0; index-- ) {
        let word = str[index];
        reversed += word
    }
    return reversed;
}






console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'


// function reverseString(str) {
//     // looking for a string 
//     let reversed = '';
//     // starting the string at the end of it 
//     for(let i = str.length - 1; i >= 0; i--) {
//         let char = str[i];
//         reversed += char;
//     }
//     return reversed;
// }
