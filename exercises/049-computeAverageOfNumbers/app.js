function computeAverageOfNumbers(arr){
  if(!Array.isArray(arr) || arr.length === 0){
    return 0
  }
  
  let sum = arr.reduce((acumulator, currentValue) => acumulator + currentValue, 0)

  return sum / arr.length
}

let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3