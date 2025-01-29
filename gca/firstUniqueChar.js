// Problem: Given a string, find the first non-repeating character and return its index. If none exist, return -1.
function firstUniqChar(s) {
    let count = {};
    
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    
    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === 1) return i;
    }
    
    return -1;
}

console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("aabb")); // -1
