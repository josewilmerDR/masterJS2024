// Write your function here
function getNthElementOfProperty(obj, key, n){
    
    for (let i = 0; i < obj.key.length; i++){
    if(obj.key[i] ===n+1){
        return obj.key[i]
    }
    }
}

let obj = {
    key: [1, 2, 6]
  };
  let output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2
  