let maxValue = function(nums) {
    let max = null;

    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        // comparing largest number in array 
        if(max === null || num > max) {
            max = num;
        }
    }
    return max;
};

console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3 ])); // 3
console.log(maxValue([])); // null
console.log(maxValue(["Bird", "Cat", "Turtle"]));
