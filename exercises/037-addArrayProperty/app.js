function addArrayProperty(obj, key, arr) {
  // Add your code after this line
  if(typeof obj === "object" && typeof key === "string" && typeof arr === "object")
  return obj[key] = arr
  
}

let myObj = {};
let myArray = [1, 3];
console.log(myObj); // --> {}
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty); // --> [1, 3]