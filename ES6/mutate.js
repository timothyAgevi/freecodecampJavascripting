//notes
// by using const an
//  array can **NOT** be reassigned but can still be mutated 

// instruction
// An array is declared as const s = [5, 7, 2]. 
// Change the array to [2, 5, 7] 

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

  // Only change code above this line
}
editInPlace();
