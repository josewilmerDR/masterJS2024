// Write your function here
function findMinLengthOfThreeWords(word1,word2,word3){

    return  Math.min(word1.length,word2.length,word3.length)

}

let output = findMinLengthOfThreeWords('alaaaaa', 'beea', 'seaae');
console.log(output); // --> 1
