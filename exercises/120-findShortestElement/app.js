function findShortestElement(arr) {
    // your code here
    if(arr.length === 0){
        return ''
    }

    let minWord = '                        '

    for (let element of arr){
        if(element.length < minWord.length){
            minWord = element
        }
    }
    return minWord
}

let output = findShortestElement(['aasa', 'twoasasas', 'threasse']);
console.log(output); // --> 'a'