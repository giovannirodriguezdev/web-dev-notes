function tripler(nums) {
    let triple = [];
    let i = 0;

    while(i < nums.length) {
        let oldNum = nums[i];
        let newNum = oldNum * 3;

        triple = triple.concat(newNum);
        i++
    }
    return triple;
}

console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
