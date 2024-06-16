// Write your function here
function isEvenLength(word){
    if(word % 2 ===0){
        return true
    }else{
        return false
    }
}

let output = isEvenLength('wow');
console.log(output); // --> false