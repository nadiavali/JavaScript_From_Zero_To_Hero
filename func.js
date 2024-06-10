/* camelCase
function functionName(arguments) {
  // code block
}
 */

function func(arg) {
    console.log("Argument received:", arg);
    console.log("Argument type:", typeof arg);
  }
  
  // Function Calling
  func(1);
  func(2521);
  func("Rabbit");
  func(true);


  let a = 15;

  function num(a) {
    console.log("(func) a =", a); // a local
  };
  
  num(20);
  
  console.log("(global) a =", a); // a global

// Unfilled arguments will receive the value undefined
//and will not be displayed in any way. Redundant arguments 
//will not be used:
function numSet(a, b, c) {
    console.log([a, b, c]);
  }
  
  numSet(12, 13);
  numSet(15, 12, 13, 15);

//return
function add(a, b) {
    return a + b;
  }
  
  let sum = add(25, 30);
  
  console.log("sum =", sum);
