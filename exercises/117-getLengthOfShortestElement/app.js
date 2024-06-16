function getLengthOfShortestElement(arr) {
    // your code here
    if(arr.length === 0){
        return 0
    }

    let minLength = 99999999999999
    for (let element of arr){
        if(element.length < minLength){
            minLength = element.length;
        }
    }
    return minLength;
}

let output = getLengthOfShortestElement(['oneasasa', 'twoasa', 'three']);
console.log(output); // --> 3
