function getAllWords(str) {
    // your code here
 
    if(typeof str !== "string" || str === null){
        return[]
    }
    return str.split(" ")
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
