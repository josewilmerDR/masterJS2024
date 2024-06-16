function addProperty(obj, key) {
  // your code here
  if(typeof obj === "object" && obj !== null){
    obj[key] = true
  }
  return obj

}

let myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true
