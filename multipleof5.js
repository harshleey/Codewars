// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.
// function roundToNext5(n){
//  while(n%5) n++;
//  return n;
// }

function roundToNext5(n){
 while(n % 5 !== 0) n++;
 return n;
}


// var summation = function (num) {
//  let sum = 0;
//  for(let i = 1; i <= num; i++) {
//    console.log(sum + i)
//  }
//  return sum
// }

// summation(8)

// var summation = function (num) {
//  return (num > 1) ? num + summation(num - 1):num;
// }

// function invert(array) {
//  let newArray = [];
//  for (let i = 0; i < array.length; i++) {
//    if (array[i] > 0) {
//      newArray.push(array[i] * -1)
//    }
//    else {
//     newArray.push(array[i] * -1)
//    }
//  }
//  return newArray
// }

// function invert(array) {
//  return array.map(element => element * -1)
// }

// const invert = array => array.map(num => -num);
// invert([1,2,3,4,5])
// invert([1,-2,3,-4,5])

function roundToNext5(n){
 // ...
 if (n === 0) {
  console.log(0)
 }
  else if (n > 0) {
   console.log(n + (5 - n % 5))
  }
  else {
   console.log(n - (5 - n % 5))
  }
 
}

roundToNext5(-12)

// function roundToNext5(n){
//  while(n%5) n++;
//  return n;
// }