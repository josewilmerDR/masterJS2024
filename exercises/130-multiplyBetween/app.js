function multiplyBetween(num1, num2) {
    // your code here
    
    if(num1 >= num2){
        return 0
    }
    
    let sum = 1;
    for (let i = num1; i < num2; i++){
        sum *=i
    }

    return sum;

}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
