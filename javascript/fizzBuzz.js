
// function fizzBuzz(max) {
//     for (let i = 0; i < max; i++) {
//         // checking if divisible by 3 
//         if(i % 3 === 0 && i % 5 !== 0) {
//         console.log(i);
//         // checking if divisible by 5 
//     } else if (i % 5 === 0 && i % 3 !== 0) {
//         console.log(i);
//         }
//     }
// }

// fizzBuzz(20);


function fizzBuzz (max) {
    let nums = [];

    for (let i = 1; i < max; i++) {
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            nums.push(i);
        }
    }
    return nums;
}

console.log(fizzBuzz(20));
