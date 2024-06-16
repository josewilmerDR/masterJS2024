function filterOddLengthWords(words) {
    // your code here
    if(typeof words !== "object" || words === null || words.length === 0){
        return []
    }
    
    // for (let i = 0; i < words.length; i++){
    //     if(words[i].length % 2 !== 0){
    //         [words]
    //     }
    // }
    // return words

    return words.filter((index) => index.length % 2 !== 0)
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
