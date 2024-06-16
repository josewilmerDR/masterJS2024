function getLargestNumberAmongMixedElements(arr) {
    // your code here
    if(arr.length === 0){
        return 0
    }
    newArr = arr.filter(index => typeof index === "number")

    if(newArr.length === 0){
        return 0
    }

    maxNum = Math.max(...newArr)

    return maxNum
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
