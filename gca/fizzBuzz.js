// Problem: Print numbers from 1 to n. If a number is divisible by 3, print "Fizz". If by 5, print "Buzz". If by both, print "FizzBuzz".

function fizzBuzz(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) result.push("FizzBuzz");
        else if (i % 3 === 0) result.push("Fizz");
        else if (i % 5 === 0) result.push("Buzz");
        else result.push(i.toString());
    }
    return result;
}

console.log(fizzBuzz(15));
