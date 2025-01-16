/* Write a function pitPat(max) that accepts a number as an arg. The function should return an array containing all positive numbers less than or equal to max that are divisible by either 4 or 6, but not both.
 */

let pitPat = function(max) {
    let nums = [];

    for(let i = 0; i <= max; i++) {
        if((i % 4 === 0 || i % 6 === 0) && i % 12 !== 0) {
            nums.push(i);
        }
    }
    return nums;
}

console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
