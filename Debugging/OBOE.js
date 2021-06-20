//  OBOE - of by one error

//notes
    // If you try to access an index equal to the length, the program may throw an 
    // "index out of range" reference error or print undefined.

//instructions
    // Fix the two indexing errors in the following function 
    // so all the numbers 1 through 5 are printed to the console.

    function countToFive() {
        let firstFive = "12345";
        let len = firstFive.length;
        // Only change code below this line
        for (let i = 1; i <= len; i++) {
        // Only change code above this line
          console.log(firstFive[i]);
        }
      }
      
      countToFive();