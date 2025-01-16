
function isSubstring(searchString, subStr) {
    let lowerSearchStr = searchString.toLowerCase();
    let lowerSubStr = subStr.toLowerCase();
    // checks to see if subStr is in searchString 
    return lowerSearchStr.indexOf(lowerSubStr) !== -1;
}

console.log(isSubstring("The cat went to the store", "he cat went")); // => true
console.log(isSubstring("Time to program", "time")); // => true
console.log(isSubstring("Jump for joy", "joys")); // => false
