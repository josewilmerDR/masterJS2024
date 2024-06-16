function addToFront(arr, element) {
  // your code here

  if(!Array.isArray(arr)){
    return []
  }

  arr.unshift(element)
  return arr
  
}

let output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]
