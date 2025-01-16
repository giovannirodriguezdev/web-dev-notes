
// function costOfGroceries(groceries) {
//     let butter = 1;
//     let eggs = 2;
//     let milk = 3;
//     let bread = 4;
//     let cheese = 5;

//     for(let i = 0; i < groceries.length; i++) {

//     }
// }


// string changer 


function stringChanger(word, operation) {
    if(operation === 'Foo') {
        string = word.charAt(0).toUpperCase() + word.slice(1);
    } else if(operation === 'FOO') {
        string = word.toUpperCase()
    } else if(operation === 'foofoo') {
        string = word + word;
    } else if(operation === 'oof') {
        string = word.split('').reverse().join('');
    } 
    return string;
}

console.log(stringChanger('foo', 'Foo'));
console.log(stringChanger('foo', 'FOO'));
console.log(stringChanger('foo', 'foofoo'));
console.log(stringChanger('foo', 'oof'));
