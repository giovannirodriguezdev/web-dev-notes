// use !== 0 if looking for odd number 

// function isOdd(num) {
//     return (num % 2 !==0)
// }

function isOdd(num) {
    if(num % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isOdd(27));
console.log(isOdd(20));
