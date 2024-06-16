function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    if(!Array.isArray(obj.key)){
      return 0
    }

    return obj.key.reduce((acc, val) => acc * val)
    
}

let obj = {
  key: [1, 2, 3, 4,3]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
