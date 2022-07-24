// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// function basicOp(operation, value1, value2){
//   // Code
//   operation === '+' ? value1 + value2 :
//   operation === '-' ? value1 - value2 :
//   operation === '*' ? value1 * value2 :
//   value1 / value2;
// }

// function basicOp(o, a, b) {
//  return eval(a+o+b);
// }

// function basicOp(operation, value1, value2) {
//  switch (operation) {
//      case '+': return value1 + value2;
//      case '-': return value1 - value2;
//      case '*': return value1 * value2;
//      case '/': return value1 / value2;
//      default: return 'Operation must be one of + - * /';
//  }
// }

// const basicOperations = {
//  '+': (a,b) => a + b,
//  '-': (a,b) => a - b,
//  '*': (a,b) => a * b,
//  '/': (a,b) => a / b,
// }

// let input = prompt("What is your name");
// let count = 0
// for (let i = 0; i < input.length; i++) {
//     if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
//         count++
//     }
//   }
// alert(count)
// let input = prompt("What is your name");
// alert(input.split("").reverse().join("").toLowerCase())

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

//  function monkeyCount(n) {
//   // set up an empty array box
//   let array = []
//   for (let i = 1; i <= n; i++) {
//     array.push(i)
//   }
//   console.log(array)
// }
//   // we loop through
//   monkeyCount(10)

// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13]

// function oddCount(n){
//   // your code here
//   let num = 0;
//   let array = []
//   for (let i = 1; i < n; i++) {
//     if (i % 2 === 1) {
//       num++;
//       array.push(i)
//     }
//   }
//   console.log(num)
//   console.log(array.length)
// }

// oddCount(7)

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

function divisibleBy(numbers, divisor){
  // set an empty array
  // declare a for loop
  // put a conditional (if statement) that states if num / divisor === 0 
  // push the true statements into the empty array
  // then return the array
  let array = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      array.push(numbers[i])
    }
  }
  console.log(array)
}

divisibleBy([1, 2, 3, 4, 5, 6], 2)