function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    if(!Array.isArray(obj.key) || obj.key.length === 0){
        return 0;
    }

 return obj.key.reduce((acc, val) => acc + val)
    
}

let obj = {
    key: []
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
