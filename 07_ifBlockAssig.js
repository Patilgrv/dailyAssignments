//check if given number is ODD or Even using function

console.log('___________1__________');

function numType(num){
    if(num%2==0){
    console.log(`Given number ${num} is a Even number`);
    }
    else{
        console.log(`Given  number ${num} is a Odd number`);
    }
}
numType(45)
numType(70)
numType(67)
numType(98)

console.log('___________2__________');

//Check for the voting eligibilty

function voter(age){
    if(age>=18){
        return(`Candidate with age ${age} is Eligible for voting`)
    }
    else{
        return(`Candidate with age ${age} is not Eligible for voting`)
    }
}

var eligibiltyCheck = voter;
console.log(voter(18));
console.log(voter(20));
console.log(voter(17));
console.log(voter(40));
