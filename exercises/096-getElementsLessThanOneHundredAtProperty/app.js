// Write your function here

function getElementsLessThan100AtProperty(obj, key){

    return obj.key.filter((index) => index < 100).sort()
}


let obj = {
    key: [1000, 20, 50, 10, 1, 2333, 500]
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]