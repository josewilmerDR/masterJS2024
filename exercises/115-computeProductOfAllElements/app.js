function computeProductOfAllElements(arr) {
  // your code here

  return arr.reduce((acc, val) => acc * val)
  
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
