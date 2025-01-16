
// Takes an array of numbers and returns a new array where every element of the original array is multiplied by 2 

function doubler(numbers) {
    // this is the end goal 
    let doubledNums = [];
    // start at beginning index 
    let i = 0;
    // retrieving every number in array 
    while(i < numbers.length) {
        // total of original numbers 
        let oldNum = numbers[i];
        // doubling old numbers to create new numbers 
        let newNum = oldNum * 2;
        // creating new doubled number and storing it 
        doubledNums = doubledNums.concat(newNum);
        i++;
    }
    return doubledNums;

}

console.log(doubler([1,2,3,4]));
console.log(doubler([7,1,8]));
