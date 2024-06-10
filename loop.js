/* 
LOOP TYPES:
while
do-while
for
*/

/* WHILE: # 
The while loop is the simplest type of loop.
It continues to execute a code block as long
as the specified condition remains true.
Be cautious with :If the condition always evaluates to true,
the loop will never break, HANG!
executes code block after the condition check!
*/
let a = 5;

while (a <= 10) {
    console.log("a =", a);
    a++;
    
}

/*
do while:
Executes code block before the condition check.
The code block within the do is guaranteed to 
be executed at least once:
The do-while loop is particularly useful when you need 
to prompt the user for input at least once and continue
until the user enters valid data or meets a specific condition.
*/
// while loop
while (false) {
    console.log("while"); // not executed
    }

  // do-while loop
do {
    console.log("do-while"); // executed 1 time 
    } while (false);


/*FOR:
for (Initialization; Condition; Increment / Decrement) {
  // code block
  // Step 1: Counter initialization
let i = 1;
// Step 2: Main loop body
if (i < 5) {  // condition check
  console.log("Loop iteration:", i); // loop body
}
i++; // increment operation
} */

let i = 2077;
console.log("(global) i =", i);

for (let i = 0; i < 4; i++) {
    console.log("(for) i =", i);
}

console.log("(global) i =", i);


for (let i = 0; i < 40; i += 7) {
    console.log("i =", i);
};


// while via for

// WHILE
let f = 1;
while (f <= 3) {
    console.log("While:", f);
    f++;
}

// FOR
for (let i = 1; i <= 3; i++) {
    console.log("For:", i);
}

let tiger = "Tiger";

for (let i = 0; i < 5; i++) {
    console.log(tiger);
};

// break:to exit a loop prematurely.
let z = 1;

while (true) {
    console.log("Iteration", z);
    z++;
    if (z > 5) { // careful of the Concatenation
        break;
    }
}




for (let i = 0; i < 10; i++) {
  a += i;
  console.log("a =", a);
  if (i > 3) {
    break;
  }
}
// Breaking a while Loop Immediately
while (true) {
    console.log("Iteration start");
    break;
    console.log("Iteration end"); // This line will not be executed
  }
  
  console.log("Loop was ended");



  // Continue

/*
The continue keyword works similarly to break,
but instead of terminating the loop entirely, 
it only skips the current iteration and proceeds 
with the next one. This behavior can be handy for
fine-grained control of loop execution.
  */

  for (let i = 1; i <= 5; i++) {
    console.log("Iteration started:", i);  
  
    if (i == 3) {
      continue;  // Skip the end of the 3rd iteration
    }
  
    console.log("- Iteration ended:", i);
  }



//TODO:
/*mplement a loop that skips even iterations and
stops on the 5th iteration. Here are the instructions:
The loop should stop at the 5th iteration.
For each iteration, output the iteration number to the console.
If the loop skips an iteration, output the word "Skip" to the console.
If the loop stops, output the word "Stop" to the console. */

for (let i = 1; i <= 10; i++) {
    console.log("Iteration", ___);
    
    if (i >= 5) {
      console.log("___");
      ___;
    };
  
    if (i % 2 == 0) {
      console.log("___");
      ___;
    } else {
      console.log("Successful");
    };
  };