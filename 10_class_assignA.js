console.log("_____STEP 1. Defined class for Vehicle and created obj_______");
class Vehicle{
    constructor(type,modelName,Color,Transmission,Mileage,FuelType,){
        this.type = type;
        this.modelName = modelName;
        this.Color = Color;
        this.Transmission = Transmission;
        this.Mileage = Mileage;
        this.FuelType = FuelType;
    }
}

const Jeep = new Vehicle("SUV","JeepWrangler","Grey","Automatic", "12 kmpl", "Petrol")
const Mercedes = new Vehicle("SUV","Mercedes-AMG G3","Silver","Automatic","805 kmpl", "Petrol")
const Volvo = new Vehicle("Sedan"," Volvo XC90", "Blue","Automatic","11 kmpl","Hybrid")
const Tesla = new Vehicle("truck","Cyber truck","metalic","motorType","250 kmpc","Electric")
const Ola = new Vehicle("Moped","OLA s1Pro","Black","belt-drive","120 kmpc","electric")
             
let arrayOfVehicle = [Jeep,Mercedes,Volvo,Tesla,Ola]
console.log(Jeep);
console.log(Mercedes);
console.log(Volvo);
console.log(Tesla);
console.log(Ola);

console.log("____STEP 2. Added to Array and traverse using for of loop____");

// for (let index = 0; index < arrayOfVehicle.length; index++) {
//     const element = arrayOfVehicle[index];
//     console.log(`Vehicle Details: ${element.type}, ${element.modelName}, ${element.Color}, ${element.Transmission},${element.Mileage}, ${element.FuelType}`);
// }


for (const element of arrayOfVehicle) {
    console.log(`Vehicle Details: ${element.type}, ${element.modelName}, ${element.Color}, ${element.Transmission},${element.Mileage}, ${element.FuelType}`);
}


console.log("____STEP3 Created new Class for College and added attributes to it____");
class College{
    constructor(Name, Location, Course , CollegeCode){
        this.Name = Name;
        this.Location = Location;
        this.Course = Course;
        this.CollegeCode = CollegeCode
    }
}

const ATC = new College("Acropolis Technical Campus", "Indore", "Engineering", '0875')
const AIMS = new College("Aurbindo Institute of Medical Science", "Ujjain","Medical","7856" )
const NIL =  new College("National Institute of LaW","Raipur","Law","5463")
const IDC = new College ("Indore Dental college", "Indore","Dental","5644")


const traverseObject =(input) => Object.entries(input).forEach(([key,value]) => {
    console.log(`${key}, : ${value}`);
})
console.log('-----------------------------------');
traverseObject(ATC)
console.log('-----------------------------------');
traverseObject(AIMS)
console.log('-----------------------------------');
traverseObject(NIL)
console.log('-----------------------------------');
traverseObject(IDC)
console.log('-----------------------------------');

console.log('____STEP4____Number is prime or Not');
