function addFullNameProperty (obj){
  if(typeof obj === "object" && obj !==null && "firstName" in obj && "lastName" in obj){
    obj.fullName = `${obj.firstName} ${obj.lastName}`
  }
  return obj
}

let person = {
  firstName : "Jose",
  lastName : "Diaz"
}

addFullNameProperty(person)
console.log(person.fullName)