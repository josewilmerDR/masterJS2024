function getLongestWordOfMixedElements(arr) {
    // your code here

    if(arr.length === 0){
        return ''
    }

    newArr = arr.filter(index => typeof index === "string")

    if(arr.length === 0){
        return ''
    }

    let maxLength = ''

    for (let element in newArr){
        if(newArr[element].length > maxLength.length){
            maxLength = newArr[element]
        }
    }

    return maxLength;
    
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
