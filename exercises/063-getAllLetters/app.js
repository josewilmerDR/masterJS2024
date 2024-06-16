function getAllLetters(str) {
    // your code here
 
    if(typeof str !== "string" || str === null){
        return []
    }

    return str.split('')
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
