function removeFromBack(arr) {
    // your code here

    if(!Array.isArray(arr)){
        return []
    }

    arr.pop()

    return arr
    
}

let output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]
