// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
 // your code here
 // loop through the array
 // if the x element is in the array, return through
 // else return false
 console.log(a.includes(x))
 
}

check([101, 45, 75, 105, 99, 107], 107)
check(['t', 'e', 's', 't'], 'e')
check(['what', 'a', 'great', 'kata'], 'kat')

// function check(a,x){
//  return a.indexOf(x) > -1 ? true : false;
// };

// function check(a,x){
//  var result = false;
//  for(i = 0; i < a.length; i++){
//    if(a[i]==x){
//    result  = true;
//    }
  
//  }
//  return result;
// };
// check([1, "hey", false], 1);