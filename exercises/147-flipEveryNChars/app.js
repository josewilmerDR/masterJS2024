function flipEveryNChars(string, n) {
    // your code here

    let input = ''
    
    for (let i = 0; i < string.length; i+=n){
        let segment = string.slice(i, i+n)

        input += segment.split('').reverse().join('')
    }
    return input;
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
