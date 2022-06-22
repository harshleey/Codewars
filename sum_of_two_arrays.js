// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  // return arr1 + arr2; //something went wrong
  console.log(arr1.concat(arr2).reduce((acc, current) => acc + current, 0)) 
}

let first = [2, 4, 5, 9, 3]
let second = [3, 87, 9, 3]


arrayPlusArray(first, second)