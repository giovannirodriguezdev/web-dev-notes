/* Write a function leastCommonMultiple(num1, num2) that accepts two numbers as arguments. The functions should return the smallest number that is divisible by both num1 and num2. */


let leastCommonMultiple = function(num1, num2) {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);

    for(let i = max; ; i += max) {
        if(i % min === 0) {
            return i;
        }
    }
}

console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10
