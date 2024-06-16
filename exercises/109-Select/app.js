function select(array, obj){

    let result = {}

    array.forEach(element => {
        if(obj.hasOwnProperty(element)){
            result[element] = obj[element]
        }
    });

    return result;
}


let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }