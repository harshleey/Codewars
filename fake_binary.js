// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
 // create a variable to hold the result which is a string
 let bin = ''
 // loop through the string and update the variable
 // x.split("").forEach(e => {
 //  if (e < 5) {
 //   bin += 0
 //  }
 //  else {
 //   bin += 1
 //  }
 // });
 // console.log(bin)
 x.split("").map(e => e < 5 ? bin += 0 : bin += 1 )
}

fakeBin("45385593107843568")

// function fakeBin(x) {
//  return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }

// function fakeBin(x) {
//  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
// }