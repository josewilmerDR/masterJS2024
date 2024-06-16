function getSmallestElementAtProperty(obj, key) {
    // your code here

  if(!Array.isArray(obj.key)){
    return []
  }

   return Math.min(...obj.key) 
  
}

let obj = {
  key: [10, 4, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
