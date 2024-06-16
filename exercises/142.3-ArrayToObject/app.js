function transformEmployeeData(array) {

  return array.map(data => listoToObject(data))

  // return transform;

}

function listoToObject(arr){

  let obj = {}

  for (let [key, value] of arr){
    obj[key] = value
  }

  return obj
}

let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']], [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // --> [{ firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' }, { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }]