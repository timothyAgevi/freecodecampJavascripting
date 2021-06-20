// instruction
    // Fix the code so the variable result is set 
    // to the value returned from calling the function getNine.
    
//notes
    // function myFunction() {
    //     return "You rock!";
    // }
    // let varOne = myFunction;
    // let varTwo = myFunction();
    // Here varOne is the function myFunction, and varTwo is the string You rock!.
    
    function getNine() {
        let x = 6;
        let y = 3;
        return x + y;
      }
      
      let result = getNine;
      console.log(result);   