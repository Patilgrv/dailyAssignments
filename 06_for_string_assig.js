console.log(" _________Part 1__________");

let statement1= "JavaScript is the language of Internet"
let statement2= "I am Angular Developer"
let statement3= "Hard work and commitment is the key of success"
let getVovels = function(strL){
    let str= strL.toLowerCase();
    let vovelCount = 0; 
    
for (let index = 0; index < str.length; index++) {
    if (str.charAt(index)=="a"||str.charAt(index)=="o"||str.charAt(index)=="i"||str.charAt(index)=="e"||str.charAt(index)=="u")
    vovelCount = vovelCount + 1;   
}
console.log(`Given string is:[${strL}
] and its vowel count are: ${vovelCount}`);
}
getVovels(statement1);
getVovels(statement2);
getVovels(statement3);


console.log(" _________Part 2__________");


let lastWordCount = function (statement) {
    var count = 0;
    for (let index = statement.length - 1; index > 0; index--) {
      if (statement[index] == " ") {
        break;
      } else {
        count++;
      }
    }
    ;
    return (`Given string is [${statement}] and number of character in last word is : ${count})`);
  };
  
  console.log(lastWordCount(statement1));
  console.log(lastWordCount(statement2));
  console.log(lastWordCount(statement3));