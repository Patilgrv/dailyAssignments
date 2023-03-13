function Bank(bankName , location , ifscCode ,branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    this.show = function () {
        console.log(`Bank Details: ${bankName} ${location} ${ifscCode} ${branchCode}`);
        
    }

    
}

console.log("__________________________________");

const yesbank = new Bank("yesBank", "Indore", "YES000", 123 )
yesbank.show();

const sbiBank = new Bank("sbiBank", "Delhi", "SBIN000", 465)
sbiBank.show();

const mahBank = new Bank("maharashtraBank", "Gujrat", "MH000", 444 )
mahBank.show();

const axisbank = new Bank("axisbank", "Maharastra", "UTIB000", 944 )
axisbank.show();

console.log("__________________________________");


Bank.prototype.opentime = "9 AM IST"
Bank.prototype.closetime = "6 PM IST"

console.log(`The Open time of SBI Bank is: ${sbiBank.opentime} and Closetime is:${sbiBank.closetime}`);
console.log(`The Name of Bank is:${axisbank.bankName} and Close time is:${axisbank.closetime}`);
console.log(`The Bank Name is:${yesbank.bankName} , BranchCode is:${yesbank.branchCode} And Open time is:${yesbank.opentime}`);