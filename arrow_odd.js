// Time to test your basic knowledge in functions! Return the odds from a list:

// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []


var odds = (values) => values.filter(v => {
 console.log(v%2)
}
 );
odds([1, 2, 3, 4, 5])