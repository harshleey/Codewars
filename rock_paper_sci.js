// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
 if (p1 === "scissors" && p2 === "paper" || p1 === "rock" && p2 === "scissors" || p1 === "paper" && p2 === "rock") {
   console.log(`Player 1 won!`)
 }
 else if (p1 === p2) {
   console.log("Draw!")
 }
 else {
  console.log(`Player 2 won!`)
 }
};

// const rps = (p1, p2) => {
//  if (p1 === p2) return "Draw!";
//  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//  if (p2 === rules[p1]) {
//    return "Player 1 won!";
//  }
//  else {
//    return "Player 2 won!";
//  }
// };

// const rps = (p1, p2) => {
//  if(p1 === p2) {
//    return 'Draw!'
//  }; 
//  return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
// }

rps('rock', 'scissors')
rps('scissors', 'rock')
rps('rock', 'rock')
// "scissors", "rock" --> "Player 2 won!"