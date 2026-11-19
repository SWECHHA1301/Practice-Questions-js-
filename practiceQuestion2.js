// Q1. Swap Two Numbers Swap two numbers using `let` without a third variable.
let a = 10;
let b = 20;

a = a + b;
b = a - b;
a = a - b;

console.log("a =", a);
console.log("b =", b);

//Q2. Area of Circle Declare a `const` for radius and calculate the area of a circle.
const radius = 5;
const area = radius * radius * 3.14;
console.log("Area of Circle = ",area)

//Q3. Temperature Conversion Convert Celsius to Fahrenheit using variables and arithmetic operators
let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit);

//Q4. Even or Odd Check if a number is even or odd using `%` and ternary operator.
let number = 7;
let result = number % 2 == 0 ? "Even" : "Odd";
console.log(result);

//Q5. FizzBuzz Check Take a number and print 'Fizz' if divisible by 3, 'Buzz' if divisible by 5,'FizzBuzz' if divisible by both, otherwise the number.
let num = 18;

if (num % 3 == 0 && num % 5 == 0) {
    console.log("FizzBuzz");
}
else if (num % 3 == 0) {
    console.log("Fizz");
}
else if (num % 5 == 0) {
    console.log("Buzz");
}
else {
    console.log(num);
}

//Q6. Maximum of Three Numbers Find the largest of three numbers using `if...else if...else`.
let p = 10;
let q = 25;
let r = 15;

if (p > q && p > r) {
    console.log(p + " is largest");
}
else if (q > p && q > r) {
    console.log(q + " is largest");
}
else {
    console.log(r + " is largest");
}

//Q7. Age Category Input age and print: Child (0–12), Teen (13–19), Adult (20–59), Senior (60+).
let age = 60;

if (age >= 0 && age <= 12) {
    console.log("Child");
}
else if (age >= 13 && age <= 19) {
    console.log("Teen");
}
else if (age >= 20 && age <= 59) {
    console.log("Adult");
}
else {
    console.log("Senior");
}
//Q8. Leap Year Checker Check if a given year is a leap year using conditional statements.
let year = 2025;

if (year % 400 == 0) {
    console.log("Leap Year");
}
else if (year % 4 == 0 && year % 100 != 0) {
    console.log("Leap Year");
}
else {
    console.log("Not a Leap Year");
}

//Q9. Grade Calculator Take marks of 5 subjects, calculate percentage, and print grade: A (90+), B(75–89), C (50–74), Fail (<50).
let s1 = 90;
let s2 = 85;
let s3 = 75;
let s4 = 80;
let s5 = 95;

let total = s1 + s2 + s3 + s4 + s5;

let percentage = total / 5;

console.log("Percentage:", percentage);

if (percentage >= 90) {
    console.log("Grade A");
}
else if (percentage >= 75) {
    console.log("Grade B");
}
else if (percentage >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}

//Q10. Traffic Light Simulation (Switch Case) Take a color (red, yellow, green) and print the action(stop, wait, go).
let color = "red";

switch (color) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Wait");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("No Signal");
}

//Q11. Multiplication Table Print the multiplication table of a given number using a `for` loop.
let five = 5;

for (let i = 1; i <= 10; i++) {
    console.log(five + " x " + i + " = " + (five * i));
}

//Q12. Sum of First N Numbers Calculate the sum of first 50 natural numbers using a `while` loop.
let i = 1;
let sum = 0;
while (i <= 50) {
    sum = sum + i;
    i++;
}
console.log("Sum =", sum);

//Q13. Factorial Find factorial of a number using a `for` loop.
let no = 5;
let fact = 1;
for (let i = 1; i <= num; i++) {
    fact = fact * i;
}
console.log("Factorial =", fact);



//Q15. Odd Numbers Pattern Print all odd numbers between 1–20 using a `do...while`
let t = 1;

do {
    if (t % 2 != 0) {
        console.log(i);
    }

    t++;
}
while (t <= 20); 


//Q16. Function Declaration – Prime Checker Write a function declaration `isPrime` that checks if a number is prime.
function isPrime(num) {

    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));
console.log(isPrime(10));


//Q17. Function Expression – Array Sum Write a function expression that takes an array of numbers and returns the sum.
let sumArray = function(arr) {
let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
};
console.log(sumArray([1, 2, 3, 4, 5]));


//Q18. Arrow Function – Fibonacci Series Write an arrow function to print the first 10 Fibonacci numbers.
let fibonacci = () => {

    let a = 0;
    let b = 1;

    for (let i = 1; i <= 10; i++) {

        console.log(a);

        let c = a + b;

        a = b;
        b = c;
    }
};

fibonacci();

//Q19. Function with Conditional – Grade Calculator Write a function that takes marks and returns the grade. Test it with multiple students.
function calculateGrade(marks) {

    if (marks >= 90) {
        return "A";
    }
    else if (marks >= 75) {
        return "B";
    }
    else if (marks >= 50) {
        return "C";
    }
    else {
        return "Fail";
    }
}

console.log(calculateGrade(95));
console.log(calculateGrade(80));
console.log(calculateGrade(60));
console.log(calculateGrade(30));

//Q20. Array Operations Create an array of 5 numbers, find the maximum, sum of elements, and print the array in reverse order
let arr = [10, 20, 30, 40, 50];

let max = arr[0];
let sums = 0;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] > max) {
        max = arr[i];
    }

    sums = sums + arr[i];
}

console.log("Maximum =", max);
console.log("Sum =", sums);

console.log("Reverse array:");

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}