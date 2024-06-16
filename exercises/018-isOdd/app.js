// Write your function here
function isOdd(num){
    if(num % 2 !== 0){
        return true
    }else{
        return false
    }
}

let output = isOdd(10);
console.log(output); // --> true