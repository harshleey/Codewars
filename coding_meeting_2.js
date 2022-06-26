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
let array = {}

let solution = list1[0];
// console.log(solution)
for (let i = 0; i < list1.length; i++) {
 // console.log(array.push(solution))
 let result = list1[i].greetings = "You are welcome"
 array.push(result)
}
console.log(array)
// let array = []
// function greetDevelopers(list) {
 // thank you for checking out my kata :)
 // return list.map(element => {
 //  element = `Hi ${element.firstName}`
  // return list[0].greetings = "You are welcome"
  // return array.push(list[0]).
 // });
 
 // return result;
// }

// let solution = greetDevelopers(list1[0])
// greetDevelopers(list1)
// console.log(solution)
// console.log(array)


