//Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of
//Be certain not to use the var keyword anywhere in your code.

function checkScope() {
    let i = 'function scope';
    if (true) {
      j = 'block scope';
      console.log('Block scope i is: ', j);
    }
    console.log('Function scope i is: ', i);
    return i;
  }