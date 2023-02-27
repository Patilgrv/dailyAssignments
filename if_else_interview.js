
console.log("A. Function to check TCS interview eligibilty");
console.log("");

function iscandidateEligibile(gradScore,hscScore,sscScore,candidateName){
    let isEligible = gradScore>=70 || hscScore>=80 || sscScore>=90? true : false;
    if (isEligible == true){
    console.log(`Congrats ${candidateName} you are eligible for TCS interview`);
    }
    else {console.log(`Unfortunately ${candidateName} you are not eligible for TCS interview`)}
}

iscandidateEligibile(80,86,90,"Gaurav")
iscandidateEligibile(70,65,55,"Sorav")
iscandidateEligibile(42,46,50,"Vikas")