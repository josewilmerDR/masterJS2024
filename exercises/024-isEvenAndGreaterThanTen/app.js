// Write your function here
function isEvenAndGreaterThanTen(num){
    if(num > 10 && num % 2 ===0){
        return true
    }else{
        return false
    }

}

let output = isEvenAndGreaterThanTen(12);
console.log(output); // --> false