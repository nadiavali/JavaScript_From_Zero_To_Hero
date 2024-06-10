// node app.js
/*
Well sometime you need to Doc it:

Addition Assignment (+=);
Subtraction Assignment (-=);
Multiplication Assignment (*=);
Division Assignment (/=);
Remainder (Modulo) Assignment (%=);
Exponentiation Assignment (**=)
*/
console.log("Hello, user!");
let a = 17;
a += 5; // a = a + 5;
console.log(a);

// increase or decrease a variable's value by 1
a++;
console.log(a);
a++;
console.log(a);
a--;
console.log(a);

// Comparison Operators
/*Equal to (==);
Strict Equal To (===);
Not Equal To (!=);
Strict Not Equal To (!==);
Greater Than (>);
Greater Than or Equal To (>=);
Less Than (<);
Less Than or Equal To (<=).
*/

console.log("Equal to:");
console.log("5 == 5 is", 5 == 5); // return True or False
console.log("5 == 4 is", 5 == 4);
console.log("5 == 4.99 is", 5 == 4.99);
            
console.log("Not equal to:");
console.log("5 != 5 is", 5 != 5);
console.log("5 != 4 is", 5 != 4);
console.log("5 != 4.99 is", 5 != 4.99);


// very interesting Rule here:

console.log("5 === 5.0 is", 5 === 5.0);
console.log("5 === '5' is", 5 === '5');
console.log("5 == '5' is", 5 == '5');

console.log("5 !== 5 is", 5 !== 5);
console.log("5 !== '5' is", 5 !== '5');
console.log("5 != '5' is", 5 != '5');

console.log("Type of 5 is", typeof(5));
console.log("Type of '5' is", typeof('5'));


/*
Logical Operators
AND (&&);
OR (||);
NOT (!)
The AND (&&) operator requires all values to be 
true to return true.The result is false if any value is false.
The OR (||) logical operator returns true if at least one of the values is true.
It returns false only when both values are false.
NOT (!)  turns true into false and false into true.
- Priority: 1not, 2and, 3or
*/

let c = 5, b = 3;

console.log(c > 4 && b > 4);
console.log(c > 1 && b > 1);
console.log(true && false || true);

// Concatenation
let wordOne = "Hello";
let wordTwo = "World";

console.log(wordOne + ", " + wordTwo + "!");

let text = "Were";
text += "wolf";
text += "!";

console.log(text)


//IF true return cons... if false return nothing
if (true) {
    console.log("It's TRUE!"); 
    }

if (false) {
    console.log("It's FALSE!");
    }
    let m = 5;
    let x = 3;
    let y;

    if (m > 0 && x > 0) {
    c = m - x;
    console.log("c =", c);
    }
    
    if (m > 2 && x > 2) {
    c = m + x;
    console.log("c =", c);
    }
    
    console.log(m, x, c);


if (a >= 100) {
    console.log("a is greater than or equal to 100");
} else {
    console.log("a is less than 100");
    }

/* Very Interesting else-if:
When at least one if condition becomes true, 
the chain is interrupted. 
- useful when you only need one condition to be satisfied.
*/



if (a > 15) {
    console.log("greater than 15");
} else if (a > 10) {
    console.log("greater than 10");
} else if (a > 5) {
    console.log("greater than 5");
} else if (a > 0) {
    console.log("greater than 0");
}