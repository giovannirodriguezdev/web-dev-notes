// function mathFun(x) {
//     if(x[0] === 'm') {
//         console.log('this is a m');
//     } else if(x[3] === 'h') {
//         console.log('this is an h');
//     } else {
//         console.log('error')
//     }
// }


// mathFun('erath');


// if ('hungry' === 'hungry') {
//     console.log('i am hungry');
// } else {
//     console.log('i am full');
// }

// mutually exclusive 

// function coinFlip(coinSide) {
//     if (coinSide > 50) {
//         console.log("HEADS")
//     } else {
//         console.log("TAILS")
//     }
// }

// coinFlip(99);

// Control flow - while loops 

// let index = 0;

// while(index <= 10) {
//     console.log('The number is ' + index);
//     index++;
// }

// For loop for example above

// for ( let index = 0; index <= 10; index++) {
//     console.log('The number is ' + index);
// }

// While loop with array 

// let array = [1,2,3];
// let index = 0

// while (index < array.length) {
//     console.log('Total array ' + array[index]);
//     index++;
// }

// For loop 

let testString = 'testing';

for(let index = 0; index < testString.length; index += 1) {
    let letter = testString[index];
    console.log(letter);
}
