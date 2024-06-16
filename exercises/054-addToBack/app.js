function addToBack(arr, element) {
  // your code here

  if(!Array.isArray(arr)){
      return []
    }

    arr.push(element)

    return arr

  
  
}

let output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]
