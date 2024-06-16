let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 },
    ],
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 },
    ],
  },
];

function renderAverageCostPerDesigner(inventory) {
    // your code here

    let result = [];
  
  // Iterar sobre cada diseñador en el inventario
  for (let designer of currentInventory) {
    // Inicializar la suma total y el contador de zapatos
    let totalCost = 0;
    let numberOfShoes = designer.shoes.length;
    
    // Iterar sobre cada zapato del diseñador
    for (let shoe of designer.shoes) {
      // Sumar el precio del zapato al total
      totalCost += shoe.price;
    }
    
    // Calcular el precio promedio
    let averagePrice = totalCost / numberOfShoes;
    
    // Añadir el resultado al array
    result.push({
      name: designer.name,
      averagePrice: averagePrice
    });
  }
  
  // Retornar la matriz de resultados
  return result;

  }

console.log(renderAverageCostPerDesigner(currentInventory));
