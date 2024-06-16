function joinArrayOfArrays(arr) {
  // your code here

//  let newArr = arr[0].concat(arr[1]).concat(arr[2]) 
//  return newArr;
  return arr.flat().flat();
  // return arr.flat(2);
  // return arr.flat(Infinity);


}

let output = joinArrayOfArrays([
  [1, 4, [11, 12]],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
