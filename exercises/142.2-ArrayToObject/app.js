function fromListToObject(array) {
  // your code here

  let obj = {}

  for (const [key, value] of array){
    obj[key] =  value
  }

  return obj;
  
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
