//Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of
//Be certain not to use the var keyword anywhere in your code.

function checkScope() {
    let i = 'function scope';// function scope
    if (true) {
      let i  = 'block scope';// declaration of second variable i
      console.log('Block scope i is: ', i);// block scope
    }
    console.log('Function scope i is: ', i);// function scope
    
    return i;
  }
  checkScope()