// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// function countSheeps(arrayOfSheep) {
//   // TODO May the force be with you
//   let total = 0;
//   arrayOfSheep.filter(element => {
//     if(element === true ) {
// total++
// }
//   })
  // console.log(total)

// }

let result = countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true])

// console.log(result)

// OR

// function countSheeps(arrayOfSheep) {
//   return arrayOfSheep.filter(Boolean).length;
  
// }

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter (element => element === true).length
}

console.log(result)