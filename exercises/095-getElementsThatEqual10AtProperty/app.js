// Write your function here
function getElementsThatEqual10AtProperty(obj, key){
    // for (let i = 0; i < obj.key.length; i++){
    //     if(obj.key[key] === key){

    //     }
    // }

    return obj.key.filter((index) => index === 10)

}

let obj = {
    key: [1000, 10, 50, 10, 45, 10]
  };
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output); // --> [10, 10]