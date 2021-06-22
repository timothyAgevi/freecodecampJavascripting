// instruction
//    Update the code so it only uses the let keyword. 

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

// So unlike var, when using let,
//  a variable with the same name can only be declared once