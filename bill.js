function billCalculations(productName,price,quantity,platformfee=10){
    let totalBill;
    totalBill = price * quantity + platformfee;
    return totalBill;
}


let bill = billCalculations("laptop",100000,6);
console.log(`your bill is...${bill}`);