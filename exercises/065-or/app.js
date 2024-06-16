function or(expression1, expression2) {
  // your code here

 // Aplica De Morgan's Law: A || B === !(!A && !B)
 return !(!expression1 && !expression2);
  
}

let output = or(true, false);
console.log(output); // --> true;
