let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

function renderInventory(currentInventory) {
  // Crear una matriz vacía para almacenar el resultado
  let result = [];
  
  // Iterar sobre cada diseñador en el inventario
  for (let designer of currentInventory) {
    // Iterar sobre cada zapato del diseñador
    for (let shoe of designer.shoes) {
      // Añadir un array con [nombre del diseñador, nombre del zapato, precio] a la matriz de resultados
      result.push([designer.name, shoe.name, shoe.price]);
    }
  }
  
  // Retornar la matriz de resultados
  return result;
    
}

console.log(renderInventory(currentInventory))
