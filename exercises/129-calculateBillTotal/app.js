function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let tax = preTaxAndTipAmount * (9.5/100)
    let pro = preTaxAndTipAmount * (15/100)

    let total = preTaxAndTipAmount + tax + pro

    return total;
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
