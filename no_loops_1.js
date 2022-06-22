// *** No Loops Allowed ***

// You will be given an array (a) and a limit value (limit). You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// Do not use loops. Do not modify input array.

function smallEnough(a, limit){
 let result = a.every(element => {
  if (element <= limit) {
   return true
  }
  return false;
 });
 return result
}

console.log(smallEnough([66, 101, 201], 200))

// OR
// smallEnough = (a, l) => a.every(e => e <= l);

// OR
// function smallEnough(a, limit) {
//  return a.every(x => x <= limit);
// }

// OR
// const smallEnough = (a, limit) => Math.max(...a) <= limit