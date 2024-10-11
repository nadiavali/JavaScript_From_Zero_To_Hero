# JavaScript

## How to Run: ```bash : node app.js

What I learned in Jvs:

Variables and Constants:
Variable (let): Named storage of a value for multiple usages.
Constant (const): An unchangeable variable.


Data Types:
Number: A numeric data type.
String: A text data type, written in quotes (" or ').
Boolean: A logical data type (true or false).
Array: A collection of values. Common methods include push(), pop(), unshift(), and shift().


Basic Operations:
Assignment: =
Math: +, -, *, etc.
Comparison: >=, <, ==, ===, etc.
Logical: AND (&&), OR (||)
String Concatenation: + between strings


Conditional Statements:
if:
javascript
Copy code
if (condition) {
    // code block
}
else:
javascript
Copy code
else {
    // code block
}
else if:
javascript
Copy code
else if (condition) {
    // code block
}


Loops:
while:
javascript
Copy code
while (condition) {
    // code block
}
do-while:
javascript
Copy code
do {
    // code block
} while (condition);
for:
javascript
Copy code
for (let counter; condition; counter++) {
    // code block
}


Functions:
Define a function:
javascript
Copy code
function myFunc(arg1, arg2, arg3) {
    // code block
}
Call the function:
javascript
Copy code
myFunc(value1, value2, value3);
Use the return keyword to return a value from a function:
javascript
Copy code
function myFunc() {
    return value;
}
Advanced Array Methods:

map():
The map() method creates a new array by applying a function to each element in the original array.

Usage:
const arr = [1, 2, 3, 4];
const tripled = arr.map(num => num * 3);
console.log(tripled); // [3, 6, 9, 12]
In this example, each number in arr is multiplied by 3, and the result is stored in the tripled array.

filter():
The filter() method creates a new array with all elements that pass a test implemented by a function.

Usage:
const arr = [1, 2, 3, 4, 5];
const evens = arr.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
Here, only the even numbers from the array are selected to create a new array.

reduce():
The reduce() method executes a reducer function on each element of the array, resulting in a single output value.

Usage:
const arr = [1, 2, 3, 4];
const sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum); // 10
In this case, reduce() adds all the numbers in the array, with an initial value of 0 for the accumulator.


