// Write your function here
function getOddLengthWordsAtProperty(obj, key){
    if(typeof obj !== "object" || obj === null){
        return []
    }

    return obj.key.filter((index) => index.length % 2 !== 0)
}

let obj = {
    key: ['It', 'has', 'some', 'words']
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']