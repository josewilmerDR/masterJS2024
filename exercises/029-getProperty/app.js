function getProperty(obj, key) {
  // your code here
  // Verifica que el primer parámetro sea un objeto y el segundo sea una clave válida
  if (typeof obj === "object" && obj !== null && key in obj) {
    return obj[key];
  } else {
    return undefined; // Retorna undefined si la clave no existe en el objeto
  }
  
  
}



let car = {
  model: 'Toyota'
};
let output = getProperty(car, 'model');
console.log(output); // --> 'Toyota'