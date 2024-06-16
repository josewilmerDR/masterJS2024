function getSquaredElementsAtProperty(obj, key) {
    // your code here

    if(!Array.isArray(obj.key)){
      return [];
    }

   return obj.key.map((index) => (index ** 2 ));
    
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
