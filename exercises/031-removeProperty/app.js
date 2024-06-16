function removeProperty(obj, key){
  if(typeof obj === "object" && obj !== null && typeof key === "string"){
    delete(obj[key])
  }
  return obj
}

let obj = {
  name:"Sam",
  age:23,
  child:2
}

removeProperty(obj,"name")
console.log(removeProperty())

