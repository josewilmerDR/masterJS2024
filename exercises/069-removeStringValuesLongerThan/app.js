function removeStringValuesLongerThan(num, obj) {
  // your code here
  for (let key in obj){
    if(typeof num === "number" && obj[key].length > num){
      delete obj[key]
    }
  }
  return obj
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};

removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
