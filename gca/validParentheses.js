// Problem: Given a string containing only ()[]{}, determine if it is valid (properly nested and closed).

function isValid(s) {
    let stack = [];
    let map = { ')': '(', '}': '{', ']': '[' };
    
    for (let char of s) {
        if (char in map) {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    
    return stack.length === 0;
}

console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
