let twoSum = function(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        let num1 = arr[i];
        // takes a second number that isn't itself to add up the target 
        for(let e = i + 1; e < arr.length; e++) {
            let num2 = arr[e];

            if(num1 + num2 === target) {
                return true;
            }
        }
    }
    return false;
};

console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false
console.log(twoSum([100, 50, 300, 99], 150)); 
