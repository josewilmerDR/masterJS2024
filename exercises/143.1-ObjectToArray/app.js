function getAllKeys(obj) {
  // your code here
  let result = []

  for (let key in obj){
  
    if(obj.hasOwnProperty(key)){
      result.push(key)
    }
  
  }
  
  return result
}

let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // --> [ 'name', 'age', 'hasPets' ]
