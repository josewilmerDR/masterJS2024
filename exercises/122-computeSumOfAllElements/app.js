function computeSumOfAllElements(arr) {
  // your code here
  return arr.reduce((acc, val) => acc + val, 0) 
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
