/* Write a function evenNumbers(max) that takes in a number as an arg. The function should return an array containing all positive, even numbers that are less than max. 

Define this function using function expression syntax.
 */

let evenNumbers = function (max) {
    let numbers = [];

    for (let i = 1; i < max; i++) {
        if (i % 2 === 0) {
            numbers.push(i);
        }
    }
    return numbers;
}

console.log(evenNumbers(7)); // [ 2, 4, 6 ]
