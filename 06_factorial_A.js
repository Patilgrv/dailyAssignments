//WAF factorialOfNum() with one arg and return result-

function factorialOfNum(num) {
  let factorial = 1;
  if (num === 0 || num === 1) {
    console.log(`Factorial for ${num} is ${factorial}`);
  } else if (num > 1) {
    for (let i = num; i >= 1; i--) {
      factorial = factorial * i;
    }

    console.log(`Factorial of given number:${num} is ${factorial}`);
  } 
  
  else {
    console.log(`${num} is not a valid number,please enter the correct number `);
  }
}


factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);



