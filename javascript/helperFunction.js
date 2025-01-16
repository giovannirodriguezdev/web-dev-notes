// let isEven = function(num) {
//     return num % 2 === 0;
// };

// let extractEven = function(numbers) {
//     let evens = [];

//     for(let i = 0; i < numbers.length; i++) {
//         let num = numbers[i];
//         if (isEven(num)) {
//             evens.push(num);
//         }
//     }
//     return evens;
// }

// console.log(extractEven([3,5,4,7,8]));


// // example 2 

// let b = function(){

// }

// let a = function() {
//     b();
// }

// a();


// // example 3 


// let isPrime = function(num) {
//     if(num < 2) {
//         return false;
//     }
//     for(let i = 2; i < num; i++) {
//         if(num % 1 === 0) {
//             return false;
//         }
//     }
//     return true;
// };

// isPrime(5);
// isPrime(12);


// let pickPrimes = function(nums) {
//     let primes = [];

//     for (let i = 0; i < nums.length; i++) {
//         let num = nums[i];

//         if (isPrime(num)) {
//             primes.push(num);
//         }
//     }
//     return primes;
// };


// example 4 

// let balance = 10

// // problem with ATM transactions 

// function transactions(type, amount) {
//     if(type === "withdraw") {
//         balance = withdraw(balance, amount)
//     } else if(type === "deposit") {
//         balance = deposit(balance, amount);
//     }
//     return balance;
// }

// function withdraw(initialBalance, amount) {
//     if(initialBalance >= amount) {
//         console.log("Withdrawing: $", amount)
//         initialBalance -= amount;
//     } else {
//         console.log("Unable to complete transaction, Insufficient funds. RIP")
//     }
//     return initialBalance
// }

// function deposit(initialBalance, amount){
//     if(amount > 10000) {
//         console.log("Too much money, IRS is coming for you")
//     } else {
//      initialBalance += amount;
//     console.log("Depositing: ", amount)
//     }
//     return initialBalance
// }

// console.log(transactions('withdraw', 9))


// example 5 


