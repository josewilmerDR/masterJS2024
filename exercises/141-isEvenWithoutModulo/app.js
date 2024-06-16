function isEvenWithoutModulo(num) {
    // your code here
    let numAbs = Math.abs(num / 2)

    if(Math.abs(num) === numAbs * 2){
        return true
    }
    
}

let output = isEvenWithoutModulo(-8);
console.log(output); // --> true
