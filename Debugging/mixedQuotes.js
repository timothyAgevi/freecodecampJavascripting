// instruction
    // Fix the string so it either uses different quotes 
    // for the href value, or escape the existing ones. 
    // Keep the double quote marks around the entire string.

//notes
    // const grouchoContraction = "I've had a wonderful evening,but this wasn't it.";
    // const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
    // const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.'; 
    
    // example 3 above is imcorrect insteaD  would use code below:
    //   const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
    
    let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);
     