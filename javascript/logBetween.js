/* Write a function logBetweenStepper(min, max, step) that takes in 3 numbers as parameters. The function should print out numbers between min and max at step intervals. See the following examples. 

Hint: this function only needs to print using console.log it does not need to return. */


// function logBetween(lowNum, highNum) {
//     let i = lowNum;
//     while (i <= highNum) {
//         console.log(i);
//         i++;
//     }
// }

// logBetween(-1, 2);

function logBetweenStepper(min, max, step) {
    let i = min;

    while(i <= max) {
        console.log(i);
        i += step;
    }
}

logBetweenStepper(5, 9, 1); // prints out:
5
6
7
8
9


logBetweenStepper(-10, 15, 5)  // prints out:
-10
-5
0
5
10
15
