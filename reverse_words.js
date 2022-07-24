// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"


// function reverseWords(str){
//  // return str; // reverse those words
//  // console.log(Array.from(str))
//  let result = str.split(' ').reverse().join(' ') //To kinda reverse the entire sentence
//  str.split('').reverse().join('') // To reverse both the sentence and the word
//  // console.log(str.split('').reverse().join(''))
//  console.log(result)
// }
// reverseWords("hello world!")



// function reverseWords(str){
//  var reverse = [];
//  var words = str.split(" ");
//  for(let i=words.length-1; i>=0; i--){
//    reverse.push(words[i]);
   
//  }
//  return reverse.join(" ")
// }

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.



// function smash (words) {
//  // first join the words, then trim
//  // console.log(words.join(' ').trim())
//  // console.log(words.split(' '))
//  console.log(words.reduce((sum, curr) => sum + Number(curr), 0))
// };

// smash([9, 3, '7', '3'])

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).

// function bonusTime(salary, bonus) {
//  // your code here
//  let total = '£'
//  bonus ? salary * 10 : salary
//  console.log(total += salary) 
// }
// bonusTime(10000, true)

// function bonusTime(salary, bonus) {
//  return bonus ? `£${10 * salary}` : `£${salary}`;
// }

// const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;

// function feast(beast, dish) {
//  return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length-1])
// }

String.prototype.isUpperCase = function() {
 // your code here
 // return this.toUpperCase() ? true : false
 // this.isUpperCase() === this.toUpperCase() ? console.log(true) : console.log(false)
 console.log(this)
}

'c'.isUpperCase()
"hello I AM DONALD".isUpperCase()