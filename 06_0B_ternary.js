console.log("Funcation to check Marriage eligibilty");

console.log("__________Step 1__________");

function maleMarriageEligibility (gender,age,boyName){
    var isEligible = gender=="Male" && age >=21 ? `Hey ${boyName} you are eligible for marriage` : `Hey ${boyName} you are not eligible for marriage`;
    console.log(isEligible);   
}
maleMarriageEligibility("Male",25,"Billgates")
maleMarriageEligibility("Male",17,"Steve Jobs")

console.log("__________Step 2__________");

function femaleMarriageEligibility (gender,age,girlName){
    var isEligible = gender=="Female" && age >=18 ? `Hey ${girlName} you are eligible for marriage` : `Hey ${girlName} you are not eligible for marriage`;
    console.log(isEligible);   
}
femaleMarriageEligibility("Female",16,"Jenifer")
femaleMarriageEligibility("Female",27,"Malinda Gates")

