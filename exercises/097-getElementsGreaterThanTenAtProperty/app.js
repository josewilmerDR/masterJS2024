// Write your function here
function getElementsGreaterThan10AtProperty(obj, key){
   return obj.key.filter((index) => index > 10)
}

let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]