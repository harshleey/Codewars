// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an array where each object will have a new property 'greeting' with the following string value:

// Hi < firstName here >, what do you like the most about < language here >?

// For example, given the following input array:
// var list1 = [
//  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
// ];
// your function should return the following array:

// [
//  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//    greeting: 'Hi Sofia, what do you like the most about Java?'
//  },
//  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
//    greeting: 'Hi Lukas, what do you like the most about Python?'
//  },
//  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
//    greeting: 'Hi Madison, what do you like the most about Ruby?'
//  } 
// ];

let list1 = [
 { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
 { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
 { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];


function greetDevelopers(list) {
 // thank you for checking out my kata :)
  list.map((e, i) => list[i].greeting = `Hi ${e.firstName}, what do you like the most about ${e.language}?`)
  return list;
 };
 
 greetDevelopers(list1)


//  function greetDevelopers(list) {
//   list.forEach(function(developer) {
//     developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
//   });
  
//   return list;
// }


// function greetDevelopers(list) {
//  // thank you for checking out my kata :)
//  return list.map( function( a ) {
//                   a.greeting = "Hi " + a.firstName + ", what do you like the most about " + a.language + "?";
//                   return a;
//                  });
// }

// function greetDevelopers(list) {
//  return list.map(x => Object.assign({}, x, {
//    greeting: `Hi ${x.firstName}, what do you like the most about ${x.language}?`
//  }))
// }