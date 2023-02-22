console.log (`___________AssignmentA___________`)

function stringBasic(){
    console.log(`My dream company is having my own company`);
}
stringBasic()

let hobby1 = "tracking" 
let hobby2 = "cleaning" 
let hobby3 = "sleeping" 
console.log(`My hobbies are ${hobby1}, ${hobby2} and ${hobby3}`);

function charCount(hobby1,hobby2,hobby3){

charCountHobby1 = hobby1.length;
charCountHobby2 = hobby2.length;
charCountHobby3 = hobby3.length;

totalHobbylength = charCountHobby1 + charCountHobby2 + charCountHobby3;
    return totalHobbylength
}

hobby1 = "tracking" 
hobby2 = "cleaning" 
hobby3 = "sleeping" 
console.log( `Number of character in all three hobbies are`,charCount(hobby1,hobby2,hobby3));


console.log (`___________AssignmentB___________`)

console.log(`Use string template  to log outpur on console`);

let givenString = "   Hey you are doing good, keep it up    ";
function stringHandsOn(){
    console.log(`1. ${givenString}`);
    console.log(`2. The length of string is ${givenString.length}`);
    newStr= givenString.trim();
    console.log(`3. String whithout whitespace is: ${newStr} and its length is ${newStr.length}`);
    console.log(`4. Total number of white space removed: ${(givenString.length - newStr.length)}`);
    console.log(`5. First and last character on the same line after trim ${(newStr.charAt(0))} ${(newStr.charAt(newStr.length-1))}`);
    console.log(`6. Total words available in the string after step 3 is: ${((givenString.length)-(newStr.length))}`);
    console.log(`7. Index of the word 'Good'  from the given string is: ${newStr.indexOf('good')}`);
    console.log(`8. Subsstring starting from index 22, using substring() is [${newStr.substring(22)}] and slice() is [${newStr.slice(22)}]`);
    console.log(`9. Is string ends with word "up" after step3: ${newStr.endsWith('up')}`);
    console.log(`10. check the string starts with word 'Hey' after trimming: ${newStr.startsWith('Hey')}` );


};

stringHandsOn()
