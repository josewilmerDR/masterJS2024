function getLengthOfLongestElement(arr) {
    // Your code here

    if(arr.length === 0){
        return 0
    }

    //declaramos el contador en 0

    let maxLength = 0;
    
    //Iteramos por los elementos iterales del arreglo con for... of
    for (let element of arr){
        if(typeof element === "string" && element.length > maxLength){
            maxLength = element.length;
        }
    }
    return maxLength

}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
