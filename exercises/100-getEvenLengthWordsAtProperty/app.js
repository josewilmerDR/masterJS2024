function getEvenLengthWordsAtProperty(obj, key) {
    //your code here
    for (let i in obj){
      if(obj.length === 0 || typeof obj.key !== "object"){
        return []
      }
    }
    
    return obj.key.filter(index => index.length % 2 === 0)

}

let obj = {
  key: ['a', 'longa', 'games']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
