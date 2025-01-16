
let myIndexOf = function(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        let location = arr[i];
        // checking if target is in location then returns its index position
        if(target === location) {
            return i;
        }
    }
    return -1;
};

console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
console.log(myIndexOf([43, -7, 11, 13], 1)); // -1
console.log(myIndexOf(['cat', 'dog', 'bird'], 'dog'));
