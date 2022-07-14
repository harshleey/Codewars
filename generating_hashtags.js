// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

/* 
Create a function that takes in an argument
create a variable with the string '#' so you can attach it to your solution
creating a condition that states that if string is empty, return false
else, 
make each words in the string an entry of an array by splitting it in order to splice it
try trimming it, then splitting the string, then slice off the first letter of each word then capitalize them and join them back */

let generator = string => {
  
  let solution = string.replace(/ /g, "").split(',').join(",")
 console.log(solution)
}

generator(" Hello there thanks for trying my Kata")








// function generateHashtag (string) {
//   if (string.trim() === '') return false;

//   const stringWithCamelCase = string
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join('');

//   const stringWithHashtag = `#${stringWithCamelCase.trim()}`;

//   return stringWithHashtag.length > 140 ? false : stringWithHashtag;
// }





// function generateHashtag (string) {
//   if (string.trim() === "") {
//     return false;
//   }

//   let stringCapitalize = string
//   .split(" ")
//   .map(element => element.charAt(0).toUpperCase() + element.slice(1))
//   .join("")

//   stringCapitalize = `#${stringCapitalize.trim()}`
//   console.log(stringCapitalize)

//   if (stringCapitalize.length > 140) {
//     return false;
//   }
  
// }
// generateHashtag(" Hello there thanks for trying my Kata")