function findPairForSum(arr, targetSum) {
  // your code here
  
  const seenNumbers = new Set();

  for (let number of arr){
    let complement = targetSum - number;

    if(seenNumbers.has(complement)){
      return [complement, number]
    }

    seenNumbers.add(number)
  }

  return []
}  

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 38);
console.log(pair); // --> [4, 5]


