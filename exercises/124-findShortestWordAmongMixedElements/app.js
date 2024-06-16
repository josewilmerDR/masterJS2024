function findShortestWordAmongMixedElements(arr) {
    // your code here

    let minWord = '                             '
    let newArr = arr.filter(index => typeof index === "string")

    for (let element in newArr){


        if( newArr[element].length < minWord.length){
            minWord = newArr[element]
        }
        

    }
    return minWord
   

}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
