console.log("__________PartA__________");
console.log(`1. Find the greatest number among the two number`);

function greaterNumber(val1,val2) {
    let isgreater = val1>val2? val1: val2;
    console.log(`Out of ${val1} and ${val2} the greater number is ${isgreater}`);
}
greaterNumber(10,-10)
greaterNumber(800,899)

console.log("__________PartB__________");

console.log("2. Function to find number is even or odd");

function isEvenOrOdd(val) {
    let isEven = val%2==0 ? true: false;
    console.log(`Is ${val} a even number: ${isEven}`);
}
isEvenOrOdd(29)
isEvenOrOdd(44)
isEvenOrOdd(0)
isEvenOrOdd(101)

console.log("__________PartC__________");

console.log("3. Function to find length of given string is even or odd");

function wordLength(value){
    valueLength = value.length
    isEven = valueLength % 2 == 0 ? true : false;
    // return isEven
    console.log(`length of given string [${value}] is even: ${isEven}`);
}

wordLength("JavaScript")
wordLength("developer")
wordLength("Googles")
