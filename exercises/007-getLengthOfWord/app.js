function getLengthOfWord(word) {
  // your code here
  if (typeof word === "string" && word.length > 0){
    return word.length;
  }else{
    return 0
  }
}

let output = getLengthOfWord("Hola mundo")
console.log(output)