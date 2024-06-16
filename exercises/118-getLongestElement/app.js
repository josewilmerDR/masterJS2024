function getLongestElement(arr) {
    // your code here
    
    //dado que lo que vamos a sacar e un string, debemos declarar una variable strig

    let maxLength = ''
    for(let element of arr){
        if(element.length > maxLength.length){
            maxLength = element
        }
    }
    return maxLength;
}

let output = getLongestElement(['one word', 'two', 'three']);
console.log(output); // --> 'three'
