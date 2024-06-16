// Write your function her
function removeElement(arr, element){
    
    //let newArray = arr.slice()
    
    return arr.filter((index) => index !== element);
}

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]