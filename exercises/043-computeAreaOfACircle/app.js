function computeAreaOfACircle(radius) {
    // your code here
    if(typeof radius === "number" && radius > 0){
        return radius ** 2 * Math.PI
    }
}

let output = computeAreaOfACircle(4);
console.log(output); // --> 50.26548245743669
