// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]
let array = []

function digitize(n) {
  // console.log(n.toString().split('').sort().reverse())
  // let string = n.toString().split('').sort().reverse()
  // let integer = parseInt(string)
  // console.log(integer)
  
  //  return n.toString()
  // let string = n.toString()
  // for (let i = 0; i <= n.length; i++) {
  //   console.log(i)
  // }

  // console.log(n[0])
  return n.toString().split("").map(Number).reverse()
}

let digit = digitize(348597)
console.log(digit)



