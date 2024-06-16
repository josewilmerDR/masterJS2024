function isPersonOldEnoughToDrive(person) {
  // Add your code after this line

  if(typeof person === "object" && "age" in person){
    return true
  }else{
    return false
  }
  
}

let obj = {
  age: 16
};
let output = isPersonOldEnoughToDrive(obj);
console.log(output); // --> true