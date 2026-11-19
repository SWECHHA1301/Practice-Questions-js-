// 1. Write a program that takes an array [1, 2, 3, 4] and returns a new array where each number is increased by 10 using map().
let arr = [1,2,3,4];
let result = arr.map(num => num + 10);

console.log(result);

// 2. Print each element of the array ['a', 'b', 'c', 'd'] along with its index using forEach().
let arr2 = ['a', 'b', 'c', 'd'];
arr2.forEach((value,index) => {
    console.log(index,value);
}) 

// 3. Given const numbers = [10, 20, 30, 40, 50, 60], use slice() to extract [20, 30, 40].
let arr3 = [10, 20, 30, 40, 50, 60];
let result3 = arr3.slice(1,4);
console.log(result3);

//4. Start with let animals = ['cat', 'dog', 'rabbit']. Use push() to add 'lion' and pop() to remove the last animal. Log the final array.
let animals = ['cat', 'dog', 'rabbit'];
animals.pop();
animals.push('lion');
console.log(animals);

//5. Convert the string 'JavaScript Is FUN' into all lowercase, then all uppercase.
let str = 'Javascript is FUN';
console.log( str.toUpperCase());
console.log( str.toLowerCase());

//6.  Reverse 'hello' without using split() — hint: use a for loop or Array.from().

let str2 = "hello";
let result4 = "";

for (let i = str2.length - 1; i >= 0; i--) {
    result4 = result4 + str2[i];
}

console.log(result4);


//7. Given const fruits = ['apple', 'mango', 'banana'], create a new array with all fruit names in uppercase using map().
let fruits =  ['apple', 'mango', 'banana'];
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);

//8. Given const student = { name: 'Sara', grade: 'A', city: 'Pune' }. Change the city to 'Delhi' and add a new property age: 20.
const student = { name: 'Sara', grade: 'A', city: 'Pune' };
student.city = 'Delhi';
student.age = 20;
console.log(student);

//9. Given const employees = [{ name: 'John', salary: 25000 }, { name: 'Riya', salary: 30000 }, { name:'Sam', salary: 40000 }], use forEach() to print each employee's name and salary.
let employees = [{ name: 'John', salary: 25000 }, { name: 'Riya', salary: 30000 }, { name:'Sam', salary: 40000 }];
employees.forEach(employees => {
    console.log(employees.name + " " + employees.salary); 
});

//10. Given const users = [{ name: 'Alice', score: 45 }, { name: 'Bob', score: 70 }, { name: 'Charlie',score: 55 }], return a new array adding passed: true if score >= 50, else false.
const users = [{ name: 'Alice', score: 45 }, { name: 'Bob', score: 70 }, { name: 'Charlie', score: 55 }];
const result5 = users.map(user => ({
    ...user,
    passed: user.score >= 50? true : false
}));
console.log(result5);

//11. Write a function sum(a, b) that returns the sum of two numbers.
function sum(a,b) {
    return a+b;
}
console.log(sum(10,4));

// 12. Write a function makeMultiplier(multiplier) that returns another function which multiplies a number by that multiplier.

function makeMultiplier(multiplier) {
    return function(num) {
        return num * multiplier;
    };
}
let double = makeMultiplier(2);
console.log(double(5));

//13.  Write a function performOperation(a, b, operationCallback) that takes two numbers and a callback (like add or subtract).
function performOperation(a, b, operationCallback) {
    return operationCallback(a, b);
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
console.log(performOperation(10, 5, add));
console.log(performOperation(10, 5, subtract));

//14. Create a function applyTwice(arr, fn) that takes an array and a function, and applies the function twice using map().

//15. Use setTimeout() to log '3 seconds passed' after exactly 3 seconds.
setTimeout(()=>{
    console.log("3 seconds passed");
},3000)

// 16. Create a function getUserData(callback) that waits 2 seconds using setTimeout() and then calls the callback with 'User data loaded'.

function getUserData(callback) {
    setTimeout(function() {
        callback('User Data Loaded')
    },2000)
}

getUserData(function(message) {
    console.log(message)
})

//17. Simulate making tea using nested setTimeout(): Boil water, Add tea leaves, Add milk, Tea is ready — each after 1 second.

setTimeout(function() {
    console.log('Boil water');

    setTimeout(function() {
        console.log('Add tea leaves');

        setTimeout(function() {
            console.log('Add milk');

            setTimeout(function() {
                console.log('Tea is ready');
            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);

//19. Create a function calculate(a, b, callback) that passes the result and a message like 'Operation complete' to the callback. 
function calculate(a, b, callback) {
    let result = a + b;
    callback(result, 'Operation complete');
}
function showResult(result, message) {
    console.log(result);
    console.log(message);
}
calculate(10, 5, showResult);

// 20. Given const nums = [1, 2, 3, 4, 5], use map() and forEach() together: double each number using map(), then print each doubled number using forEach().
const nums = [1, 2, 3, 4, 5];

let doubled = nums.map(num => num * 2);

doubled.forEach(num => {
    console.log(num);
});
