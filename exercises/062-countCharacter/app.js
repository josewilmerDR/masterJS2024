function countCharacter(str, char) {

    //Se declara la variable contador

    let count = 0;

    //Se recorre todos los caracteres de la cadena con for.
    for(let i = 0; i < str.length; i++){
        //se se compara el catacter dado con cada uno de los caracteres de la cadena.

        if(str[i] === char){
            count++;
        }
    }

    return count;

}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
