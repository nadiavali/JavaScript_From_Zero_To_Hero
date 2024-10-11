function capitaliteFL(str){
  return str[0].toUpperCase() + str.slice(1,)
};
console.log(capitaliteFL('TODAYISNICE'))

function lastLetter(str){
  return str.slice(-1,)
};
console.log(lastLetter('odayisnicE'))


let arr = [2, 3, 4, 5]
function sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      // Step 1: If the element is an even number
      if (array[i] % 2 === 0) {
        // Step 2: Multiply this number by three
        const tripleEvenNumber = array[i] * 3;
  
        // Step 3: Add the new number to the total
        sum += tripleEvenNumber;
      }
    }
    return sum;
  }
  
function sumOfTripledEvens(array){
return array
        .filter(num => num % 2 ===  0)
        .map(num => num * 3)
        .reduce((sum, num)=> sum+num,0);
}
const result = sumOfTripledEvens([1, 2, 3, 4, 5]);
console.log(result);

function sumOfTripledEvens(array) {
    return array
      .filter((num) => num % 2 === 0)
      .map((num) => num * 3)
      .reduce((acc, curr) => acc + curr);
  }
  

  /** 
   * Write a program that takes a user’s input and prints the numbers
   *  from one to the number the user entered. However, for multiples of three
   *  print Fizz instead of the number and for the multiples of five print Buzz. 
   * For numbers which are multiples of both three and five print FizzBuzz.
   */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
function FizzBuzz(input_number){
  if (input_number % 3 ==0 && input_number % 5 ===0){
    return 'FizzBuzz'
  } else if (input_number % 5 === 0){
    return 'Buzz'
  } else if (input_number % 3 === 0){
    return 'Fizz'
  } else {
    return input_number
  };
};
readline.question('Enter a number: ', usernum => {
  const input_number = parseInt(usernum, 10);
  console.log(FizzBuzz(input_number));
  readline.close();
});