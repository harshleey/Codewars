// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// Create an empty array 
// loop through the existing array
// If an entry in the array is a positive number (i.e greater than 0), i need to count each of them 
// If an entry in the array is a negative number (i.e less than 0), sum it all up
// Make provision for an empty array

function sumOfNumbers(array) {
  // console.log(array.length)
  // let positive = [] OR
  let positive = 0
  let negative = 0
  array.forEach(element => {
    // element > 0 ? positive.push(element) : negative += element; OR
    element > 0 ? positive++ : negative += element;
  });
  
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] > 0) {
  //     positive.push(array[i])
  //   }
  //   else {
  //     negative += array[i]
  //   }
  // }
  // console.log([positive.length, negative])
  console.log([positive, negative])
}

sumOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])









// function countPositivesSumNegatives(input) {
//   let positiveNums = 0;
//   let negativeNums = 0;
//   if (input === null || input.length === 0) {
//     return [];
//   } else {
//     input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num);
//   }
//   return [positiveNums , negativeNums];
// }