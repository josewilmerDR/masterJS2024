function getElementOfArrayProperty(obj, key, index) {
    // your code here

    if(!Array.isArray(obj.key)){
        return undefined
    }

    return obj.key[index]
}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
