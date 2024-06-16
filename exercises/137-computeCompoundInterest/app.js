function computeCompoundInterest(principal, rate, n, time) {
  // your code here
 
  // let principal = 1500; // Monto inicial
  // let rate = 0.10; // Tasa de interés anual (10%)
  // let n = 4; // Frecuencia de capitalización (trimestral)
  // let time = 6; // Tiempo en años

  let amount = principal * Math.pow((1 + rate / n), n * time);

  return amount - principal;

}

let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543
