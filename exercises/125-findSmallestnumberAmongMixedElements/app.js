function findSmallestNumberAmongMixedElements(arr) {
  // your code here

  if( arr.length === 0){
    return 0
  }
  newArr = arr.filter(index => typeof index === "number")

  if( newArr.length === 0){
    return 0
  }

  minNun = Math.min(...newArr)

  return minNun
  
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
