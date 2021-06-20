// instruction
    // Fix the condition so the program runs the right branch, 
    // and the appropriate value is assigned to result.

//note
// the triple === tests for strict equality, 
// meaning both value and type are the same).

let x = 7;
let y = 9;
let result = "to come";

if(x== y) { //solution on line 13
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);