// Function example 
/* function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Goat'))
 */

function add7(num) {
    return num + 7;
}
console.log(add7(7));

function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(2, 2));

function capitalize(str) {
    if (str.length === 0) return 'Please enter string!'; // Handle empty string case
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }
console.log(capitalize('hello'));

function lastLetter(str) {
    if (str.length === 0) {
        return 'String is empty';
    }
    return str[str.length - 1];
}
console.log(lastLetter(''));
