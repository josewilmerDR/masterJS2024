function filterEvenLengthWords(words) {
    // your code here

    return words.filter((index) => index.length % 2 === 0)

    // return words
    
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
