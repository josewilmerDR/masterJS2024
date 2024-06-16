function isIsogram(text) {
  //convertimos la cadena de texto a minúscula para manejar mayúsculas y minúsculas.
  text = text.toLowerCase()

  //Creamos un conjunto para almacenar los caracteres únicos.
  let setChar = new Set()

  //recorremos el string text
  for (let char of text){
    //Confirmamos que char no esté presente en el conjunto de carácteres, la primera vez, efectivamente no estará presente dado que el conjunto está vacío, y dado que debe ser true para retornar falso, saltará a la siguiente pieza de código, o sea, guardará el caractere en el conjunto.
    //La siguiente vez que intra en el bucle, setChar efectivamente ya tendrá un caracteres, que esta vez, puede ser verdadero que el caracter evaluado esta vez, ya está presente en el conjunto. De ser así, la validación será true y devolverá un false. De no ser, el nuevo caractere se almacenará en setChar y nuevamente empezará el ciclo hasta que este evalue cada uno de los caractáres de la cadena de texto.
    //Si una vez finalizada toda la evaluación, no se encuentra considencia del caracter evaluado con los caractares cuardados en el conjunto, se entiende que la cedana de texto, es un isograma (palabra o cadena de texto que no contiene letras (caracteres) repetidos)
    if(setChar.has(char)){
      return false
    }
    //Añadimos la letra al conjunto
    setChar.add(char)
  }

  return true
  
}

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false
