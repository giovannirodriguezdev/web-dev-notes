function sumArray(array) {
    // your code here...
    let sum = 0;

    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30








// function sumArray(arr) {
//     // starting point 
//     let sum = 0;
//     // calculating length of array 
//     for(let i = 0; i < arr.length; i++) {
//         // console.log('test',i);
//         // adding total in array 
//         sum += arr[i]
//     }
//     return sum
// }

// console.log(sumArray([4,3,-1,10]));
