// DESCRIPTION:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// function abbrevName(name){
// create a variable to hold the first letter of name and concat/append a full stop to it

 // let initials = name[0] + "."
 // for (let i = 0; i < name.length; i++) {
 //  if (name[i] === " ") {
 //   initials += name[i + 1]
 //  }
 // }
 // console.log(initials.toUpperCase())
 function abbrevName(name){

  var nameArray = name.split(" ");
  console.log((nameArray[0][0] + '.' + nameArray[1][0]).toUpperCase())
}

// }
abbrevName('wonuola fatima')

// OTHER SOLUTIONS

// function abbrevName(name){
//  return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
// }

// function abbrevName(name){

//  return name.split(' ').map(i => i[0].toUpperCase()).join('.')

// }