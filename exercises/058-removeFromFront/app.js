function removeFromFront(arr) {
    // your code here

    if(!Array.isArray(arr)){
        return []
    }

    arr.shift()
    return arr
}

let output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]
