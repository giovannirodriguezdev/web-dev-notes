// Mutability - can be changed or altered, only arrays

// Arrays

let nums = [1,2,3];
console.log(nums)

nums[0] = 7;
console.log(nums);

// Array.push - adds one or more to the end of an array 

let food = ['waffle', 'pizza', 'burger']
food.push('Chips', 'Candy')
console.log(food);

// Array.pop - removes the last element of an array 

let nbaTeams =['Lakers', 'Warriors','Suns','Heat']
nbaTeams.pop()
console.log(nbaTeams);

// Array.shift - removes first array 

let nbaPlayers = ['Kobe', 'Curry', 'Lebron', 'Shaq']
nbaPlayers.shift()
console.log(nbaPlayers);

// Array.unshift - adds one or more elements to beginning of an array

let favShoes = ['Dunks','Jordan 1','Yeezy']
favShoes.unshift('Timberlands')
console.log(favShoes);

// Array Method 

let dogNames = ['Kali', 'Doja', 'Dior'];

let updateNames = [];
for (let i = 0; i < dogNames.length; i++) {
    let dog = dogNames[i];
    let uppercased = dog.toLocaleUpperCase();
    updateNames.push(uppercased);
}

console.log(updateNames);
