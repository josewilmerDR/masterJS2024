function average(arr) {
  // your code here

  let sumArr = arr.reduce((acc, val) => acc + val, 0)

  let aveArr = sumArr / arr.length;

  return aveArr
  
}

function sum(arr) {
  // your code here

  let sumArr = arr.reduce((acc, val) => acc + val, 0)
  return sumArr;
}

console.log(average([1, 2])); // --> 1.5
console.log(sum([1, 2])); // --> 3
