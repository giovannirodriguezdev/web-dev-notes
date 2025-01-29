// Problem: Reverse the characters in a given string in place (if mutable) or return a new reversed string.
function reverseString(s) {
    return s.split('').reverse().join('');
}

console.log(reverseString("hello")); // "olleh"
