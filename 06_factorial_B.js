
// WAF which calculate number of words and thn return back factorial of that number
function factorialOfWordCount(givenString){
    let factorial = 1;
    let num = givenString.split(" ").length;  
    if (num === 0 || num === 1) {
        console.log(`${givenString}: Is not a string, Kinldy enter correct value`);
      } else if (num > 1) {
        for (let i = num; i >= 1; i--) {
          factorial = factorial * i;
        }
        console.log(`Number of words in given string "${givenString}" is :${num}`);
        console.log(`the Factorial  is ${factorial}`);
      } 
      
      else {
        console.log(`${givenString} is not valid  `);
      }
      console.log("-----------------------------------------------");
    }
    


factorialOfWordCount("Revision is the mother of Success")
factorialOfWordCount('We ever fail, we always learn')
factorialOfWordCount('null')
factorialOfWordCount('')
factorialOfWordCount('Gaurav Patil')