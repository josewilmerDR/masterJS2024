function modulo(num1, num2) {
    // your code here

    // Verifica los casos especiales

    if(isNaN(num1) || isNaN(num1)){
        return NaN
    }

    if(num1 === 0 || num2 === 0){
        return NaN
    }

    let quotient = Math.floor(Math.abs(num1) / Math.abs(num2))

    let remainder = Math.abs(num1) - (quotient * Math.abs(num2))

    
    if(num1 < 0){

        remainder =-remainder
    
    }

    return remainder;

      
}

let output = modulo(-25, 4);
console.log(output); // --> 1
