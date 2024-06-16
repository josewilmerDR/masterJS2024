function getAllElementsButNth(array, n) {
    // your code here
   // return array.filter((_, index) => index !== n);
   
   
    //opcional, crea una nueva copai con slice(), para no afectar el arreglo original
    //let newArray = array.splice()
    //newArray.splice(n, 1)
    //return newArray;
    array.splice(n, 1);

    return array; // Retorna el nuevo array

}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
