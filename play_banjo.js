// DESCRIPTION:
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.
function areYouPlayingBanjo(name) {
 // Implement me
 // create a condition that states that if first letter of name is r to lowercase, name + plays banjo else name + " does not play banjo"
 // Basically, turn the name first letter to a lower case then compare to your own lower case
 if(name[0].toLowerCase() === 'r') {
  console.log(name + " plays banjo")
 }
 else {
  console.log(name + " does not play banjo")
 }
}

areYouPlayingBanjo("Adam")
areYouPlayingBanjo("Riko")

// function areYouPlayingBanjo(name) {
//  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
// }

// function areYouPlayingBanjo(name) {
//  return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
// }