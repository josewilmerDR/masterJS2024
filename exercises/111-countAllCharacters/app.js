// Write your function here

function countAllCharacters(str){
    
    //Escribe una función llamada countAllCharacters. Dado un string, 
    //countAllCharacters retorna un objeto en el cual cada key es un caracter del string dado.

    //creamos el objeto.
    let countChar = {}

    //Recorremos todos los caracteres de str
    for(let char of str){
        //Confirmamos la existencia de "char" en countChar (que el los caracteres ya estén en el objeto countChar)
        if(countChar[char]){
            //Si ya existe, incrementamos el caractere.
            countChar[char] ++;
        }else{
            //Si no existe, lo inicializamos en 1.
            countChar[char] = 1;
        }
    }

    //Devolvemos el objeto.
    return countChar
    
}


let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}