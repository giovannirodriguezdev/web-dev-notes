// Problem: Given an array of integers, return a new array such that each element at index i is the product of all the numbers in the original array except the one at i.
function productExceptSelf(nums) {
    let n = nums.length;
    let result = new Array(n).fill(1);
    let left = 1, right = 1;
    
    for (let i = 0; i < n; i++) {
        result[i] *= left;
        left *= nums[i];
    }
    
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }
    
    return result;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
