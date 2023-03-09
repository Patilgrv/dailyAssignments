const professor ={
    firstName : "Vedant",
    lastName : "Patil",
    age : 28,
    college : "ATC",
    subject : "JavaScript",
    place : "Indore",
    degree: {
        engineering : 'CSC',
        PHD : 'Adv Computing'
    },
    certificate: ['Hacker Rank Participation','Certificate in IFE course','Certificate in Adv Programing'],
    totalDegree: function(){
        return(`Teacher degrees are ${this.degree.engineering} and ${this.degree.PHD} and total degrees are: ${Object.keys(this.degree).length}`);
    }// function as value
}
console.log('STEP 1');
let resultDegree = professor.totalDegree();
console.log(resultDegree);

console.log('STEP 2');
professor.totalExperience = "14 years" // adding new proerty in Obj
console.log(professor);

//Modifying clg name
console.log('STEP 3');
console.log("Modified college name ");
professor.college = "Acropolis Technical Campus"
console.log(professor);

console.log('STEP 4');
professor.certificate[3]= 'Oracel certified' // addding new certificate to array inside an obj
console.log(`last element in "Certificate" array is :${professor.certificate[professor.certificate.length-1]}`);//last element in certificate