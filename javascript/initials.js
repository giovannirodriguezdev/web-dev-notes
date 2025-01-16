/* Write a function initials(name) that accepts a full name as an arg. The function should return the initials for that name.
 */

let initials = function(name) {
    let arr = name.split(' ');
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        let el = arr[i];
        newArr.push(el[0].toUpperCase());
    }
    return newArr.join('');
}


console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'
