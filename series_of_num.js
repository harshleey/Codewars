// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// NOTES
// The integer is between a and b
// There is to be a condition that if a < b; a updates else b updates
function getSum( a,b )
{
   // initiate a variable to hold the total
   let sum = 0
   if (a < b ) {
    for (let i = a; i <= b; i++) {
     sum += i
    }
    console.log(sum)
   } 
   else if (a > b) {
    for (let i = b; i <= a; i++) {
     sum += i
   }
   console.log(sum)
  }
  else {
   sum = a || b
  }
   return sum
}

getSum(-1, 2)
getSum(-1, 0)
getSum(1, 2)

// OTHER SOLUTIONS
// function getSum(a, b) {
//  const min = a < b ? a : b;
//  const max = a < b ? b : a;

//  let sum = 0;
//  for(let i = min; i <= max; i++) {
//    sum += i;
//  }
//  return sum;
// }

// function GetSum( a,b )
// {
//    if (a == b) return a;
//    else if (a < b) return a + GetSum(a+1, b);
//    else return a + GetSum(a-1,b);
// }

// const GetSum = (a, b) => {
//  let min = Math.min(a, b),
//      max = Math.max(a, b);
//  return (max - min + 1) * (min + max) / 2;
// }

// function getSum( a, b ){
//  return Array.from({length: b >= a ? b-a+1 : a-b+1}, (_, i)=> b >= a ? i+a : i+b).reduce((a, b)=> a + b, 0)
// }