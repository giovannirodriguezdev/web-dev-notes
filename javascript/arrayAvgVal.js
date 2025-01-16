function avgVal(arr) {
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++){
        let val = arr[i];
        sum += val;
    } if(arr === 0) {
        return null;
    }
    return sum / arr.length;
}

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null
