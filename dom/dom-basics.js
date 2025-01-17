/* function sumOfTripledEvens(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 === 0) {
            const tripleEvenNumber = array[index] * 3;
            sum += tripleEvenNumber;
        }
    }
    return sum;
} */

function sumOfTripledEvens(array) {
    return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}
console.log(sumOfTripledEvens([2,5,2,6]));
