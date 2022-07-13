// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
 //You got this!
 // Turn the string into an array by splitting it, then slice off the beginning and end of the character, then join back together
 console.log(str.split('').slice(1, -1).join(''))
};

removeChar("Yellow")
removeChar("I am a winner")

// OTHER SOLUTIONS
// function removeChar(str){
//  //You got this!
//   str1 = str.split('');
//   str1.shift();
//   str1.pop();
//   return str1.join('');
    
// };

// function removeChar(str) {
//  return str.slice(1, -1); // argument -1 is the same as 'str.length -1'
// }