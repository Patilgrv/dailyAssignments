let sbiBank = {
    bankName: 'SBI', 
    location: 'Indore',
    accountNo: 'XXXX123',
    IFSC : 'SBI13',
    interestRate: '8%',
    show: function(){
        console.log(`Bank name is: ${this.bankName} and its location is ${this.location},
        user account number is ${this.accountNo}, IFSC: ${this.IFSC} , rate of interest :${this.interestRate}`);
    }    
}

let axisBank = {
    bankName: 'Axis',
    location: 'Verawal',
    accountNo: 'XXXX465',
    IFSC : 'AXIS123',
    interestRate: '9%',
    show: function(){
        console.log(`Bank name is: ${this.bankName} and its location is ${this.location},
        user account number is ${this.accountNo}, IFSC: ${this.IFSC}, rate of interest:${this.interestRate}`);
    }
}

let yesBank = {
    bankName: "YES Bank",
    location: "Delhi",
    accountNo: 'XXXX789',
    IFSC :  'YES456',
    interestRate: '10%',
    show: function(){
        console.log(`Bank name is: ${this.bankName} and its location is ${this.location},
        user account number is ${this.accountNo}, IFSC: ${this.IFSC} , rate of interest :${this.interestRate}`);
}
}

let hdfcBank = {
    bankName:  "HDFC",
    location: "Pune",
    accountNo: "XXXX753",
    IFSC : "HDFC135",
    interestRate:'11%',
    show: function(){
        console.log(`Bank name is: ${this.bankName} and its location is ${this.location},
        user account number is ${this.accountNo}, IFSC: ${this.IFSC} , rate of interest :${this.interestRate}`);
    }
}

axisBank.show()
sbiBank.show()
hdfcBank.show()
yesBank.show()