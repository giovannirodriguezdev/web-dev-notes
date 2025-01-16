/* Write a function minValue(nums) that takes in an array of numbers as an arg. The function should return the smallest number of the array. If the array is empty, the function should return null. */

function minValue(nums) {
    if(nums.length === 0) {
        return null;
    }
    let minNum = nums[0];

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] < minNum) {
            minNum = nums[i];
        }
    }
    return minNum;
}

console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null
