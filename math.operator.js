// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2){
  // Code
  operation === '+' ? value1 + value2 :
  operation === '-' ? value1 - value2 :
  operation === '*' ? value1 * value2 :
  value1 / value2;
}

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

let input = prompt("What is your name");
// let count = 0
// for (let i = 0; i < input.length; i++) {
//     if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
//         count++
//     }
//   }
// alert(count)
// let input = prompt("What is your name");
// alert(input.split("").reverse().join("").toLowerCase())