function sumDigits(num) {

    let numStr = num.toString()
    let sum = 0;
    let startIndex = 0;

    if(numStr[0] === '-'){
        sum -= parseInt(numStr[1])
        startIndex = 2
    }

    for(let i = startIndex; i < numStr.length; i++){
        sum += parseInt(numStr[i])
    }

    return sum;


}

let output = sumDigits(1148);
console.log(output); // --> 4
