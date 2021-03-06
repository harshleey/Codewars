// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

function squareOrSquareRoot(array) {
 // if 4 has a square-root
  // let newArray = []
 for (let i = 0; i < array.length; i++) {
  let sqr = Math.sqrt(array[i])
  if (sqr==Math.round(sqr)) {
    array[i] = sqr;
  }
  else {
   // perform square
  array[i] = array[i]*array[i];
 }
 }
 console.log(array)

}
squareOrSquareRoot([4,3,9,7,2,1])
squareOrSquareRoot([ 1, 2, 3, 4, 5, 6 ])

// function squareOrSquareRoot(array) {
//  return array.map(x => {
//    const r = Math.sqrt(x);
//    return (r % 1 == 0) ? r : (x*x);
//  });  
// }

// function squareOrSquareRoot(array) {
//  return array.map(x => {
//    const n = Math.sqrt(x)
//    return Number.isInteger(n) ? n : x * x
//  })
// }

// function squareOrSquareRoot(array) {
//  return array.map(e => Number.isInteger(Math.sqrt(e)) ? Math.sqrt(e) : e*e);  
// }