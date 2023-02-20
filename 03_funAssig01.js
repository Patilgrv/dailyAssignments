//Functions with no arguments and no return value
console.log("1.Function with  no argument and no return type");

function showFullName() {
    console.log("My full name is Gaurav Patil");
  }
  showFullName(); 

  function myLocation() {
    console.log("My current location is Indore");
  }
  myLocation();


  console.log("2. Function with 3 arguments and log on console inside function");

  function personalDetails(firstName, lastName, collegeName) {
    console.log('My name is',firstName , lastName,'and my college name was', collegeName);
  }
  personalDetails("Gaurav","Patil","Acropolis_Technical_Campus")

  console.log("3. WAP which swaps two value using function type");

  function swapValuesDude(value1,value2) {
    console.log("Before Swap: ", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap: ", value1, value2);
    return "Swapping variables successfully completed";
  }  

  str1 = "Virat"; str2 = "Anushka"
  num1 = 1000; num2 = 2000;
  var swapResult = swapValuesDude(num1, num2); // Function call or Function invoke
console.log(swapResult);

var swapResult2 = swapValuesDude(str1, str2);
console.log(swapResult2);

console.log("WAF with  parameters and it should return additons");

function addThreeValues(val1, val2, val3) {
     addition = (val1 + val2 + val3)
    return addition
}
 var sum = addThreeValues(10.23,600,40)
 console.log(sum);

 var greeting = addThreeValues("Hello ","Good ","Morning")
 console.log(greeting);