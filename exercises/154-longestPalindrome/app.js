function findLongestPalindrome(sentence) {
  // your code here
  sentence = sentence.toLowerCase(); // Ignorar mayúsculas y minúsculas
  let maxPalindrome = '';
  
  for (let i = 0; i < sentence.length; i++) {
    for (let j = i + 1; j <= sentence.length; j++) {
      let subString = sentence.slice(i, j);
      if (isPalindrome(subString) && subString.length >= maxPalindrome.length) {
        maxPalindrome = subString; // Actualiza el palíndromo más largo
      }
    }
  }
  
  return maxPalindrome;
  
}

function reverseString(string) {
  // your code here
  return string.split('').reverse().join('');
  
}

function isPalindrome(word) {
  // your code here
  let reversed = reverseString(word);
  return word === reversed;
  
}

let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // --> "a racecar a"
