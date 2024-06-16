function isOddWithoutModulo(num) {
    // your code here
    
    let absNum = Math.abs(num)

    let quotient = Math.floor(absNum/2)

    if(quotient * 2 !== absNum){
        return true
    }else{
        return false
    }

    
}

let output = isOddWithoutModulo(0);
console.log(output); // --> true
