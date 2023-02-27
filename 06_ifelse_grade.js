/*Write a function voteEligibilty() with one arg--> age to check whether
he or she is eligible for voting or not, then accordingly display msg on
console, dont return the value please */
console.log("____________part 1_______________");
function voteEligibilty(age){
    if (age <= 0 || age > 100 || age == "undefined" || age == null)
    {console.log(`${age} is not a valid input, Please enter valid age`);}

    else if (age >= 18) {
    console.log(`Your age is ${age}, you are eligible for vote`);}

   else {
    console.log(`Your age is ${age} hence you are not eligible for vote`); }
}

voteEligibilty(45);
voteEligibilty(17);
voteEligibilty(8);
voteEligibilty(20);
voteEligibilty(45);
voteEligibilty(200);
voteEligibilty(-10);
voteEligibilty(0);
voteEligibilty(undefined);
voteEligibilty(null);

/*2. Design a grade system wutg function bane as gradeCalculation wth arg marks and 
and no return value*/
console.log("____________part 2_______________");
function gradeCalculation(marks) {
  if (marks <= 0 || marks > 100  || isNaN(marks) || typeof marks == "string") {
    console.log(`${marks} invalid input, Please provide valid marks`);
  } else if (marks >= 90) {
    console.log(`Funtastic marks: ${marks}, Your grade is A+`);
  } else if (marks >= 75) {
    console.log(`Excellent marks: ${marks}, Your grade is A`);
  } else if (marks >= 50 ) {
    console.log(`Very Good marks: ${marks}, Your grade is B+`);
  } else if (marks >= 35 ) {
    console.log(`Good marks: ${marks}, Your grade is B`);
  } else {
    console.log(`Marks is: ${marks}, Your grade is C, need improvement`);
  }
  // else if (marks>=35|| marks <50) {console.log(`Marks is: ${marks}, Your grade is C, need improvement`);}
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("eighty");
gradeCalculation(NaN);
gradeCalculation(null);
