//instruction
// Change the code so that all variables
//  are declared using let or const.
//   Use let when you want the variable to change,
//     and const when you want the variable to remain constant.
//    Also, rename variables declared with const to conform to common practices, 
// meaning constants should be in all caps.

function printManyTimes(str) {

    // Only change code below this line
  
    const SENTENCE = str + " is cool!";// Declared it with const
    // capitalized  sentence
    for (var i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);// capitalized sentence
    }
  
    // Only change code above this line
  
  }
  printManyTimes("freeCodeCamp");

//Note: It is common to use uppercase variable identifiers
//  for immutable values 
// and lowercase or camelCase for mutable values (objects and arrays).
