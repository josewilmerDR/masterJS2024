function getStringLength(str) {
    // Creamos un array vacío para almacenar los valores
    let length = 0;
    
    // Usamos un bucle while para recorrer la cadena
    while (str.slice(length, length + 1) !== '') {
        length++;
    }
    
    return length;
}

let output = getStringLength('hello');
console.log(output); // --> 5
