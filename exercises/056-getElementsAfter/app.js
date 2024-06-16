function getElementsAfter(array, n) {
  // your code here
  if(!Array.isArray(array)){
    return []
  }
  return array.slice(n+1)
  // return array
  
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
