// instruction
    // The function raiseToPower raises a base to an exponent. Unfortunately, it's not called properly -
    //  fix the code so the value of power is the expected 8.
    
// note
    // upply all required arguments, 
    // in the proper order to avoid these issues.

    function raiseToPower(b, e) {
        return Math.pow(b, e);
      }
      
      let base = 2;
      let exp = 3;
      let power = raiseToPower(exp, base);
      console.log(power);