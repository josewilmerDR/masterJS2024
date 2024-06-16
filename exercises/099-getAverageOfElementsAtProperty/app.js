function getAverageOfElementsAtProperty(obj, key) {
  // your code here

  if(obj.key.length === 0 || typeof obj.key !== "object" || obj.key === null){
    return 0
  }
  
  let newObj = obj.key.reduce((acc, curr) => acc + curr, 0)

  return newObj / obj.key.length

}

let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  