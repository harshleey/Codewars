// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

let number = array => {
  //your awesome code here

  let resultOfArr = [];

  for (let i = 0, j = 1; i < array.length; i++) {
    if (array.length === 0)  {
      return `Empty array should return empty array`
    }
    else {
      resultOfArr.push(`${j}: ${array[i]}`);
      j++
    } 
  }
  return resultOfArr;
}


let arr = ["a", "b", "c"];
// number(arr);
// console.log(arr.length)
console.log(number(arr))

// OR

return array.map(function (line, index) {
  return (index + 1) + ": " + line;
});

// OR

// const numbers = array => array.map((n, i) => `${i + 1}: ${n}`);
