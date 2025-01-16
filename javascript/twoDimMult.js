/* Write a function twoDimensionalProduct(array) that takes in a 2D array of numbers as an argument. The function should return the total product of all numbers multiplied together.
 */

let twoDimensionalProduct = function(array) {
    let sum = 1;

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            sum *= array[i][j];
        }
    }
    return sum;
}

let arr1 = [
    [6, 4],
    [5],
    [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
    [11, 4],
    [2]
];
console.log(twoDimensionalProduct(arr2)); // 88
