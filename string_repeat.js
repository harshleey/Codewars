// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"



// function repeatStr (n, s) {
//  // Create a variable to input the string
//  let string = "";
//  // loop through the string in an amount less than or equal to the integer
//  for(let i = 1; i <= n; i++) {
//   string += s
//  }
//  return string;
// }

function repeatStr (n, s) {
 n.forEach(element => {
   console.log(s);
 })
}

repeatStr(6, "Hello")

// OTHER SOLUTIONS
// function repeatStr (n, s) {
//  return s.repeat(n);
// }