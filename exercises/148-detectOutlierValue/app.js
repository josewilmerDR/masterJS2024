
function detectOutlierValue(str) {
    // Convertimos la cadena de números en un arreglo
    let numbers = str.split(' ').map(Number)

    let evenNumbers = numbers.filter(num => num % 2 === 0).length
    let oddNumbers = numbers.length - evenNumbers;

    let isEven = evenNumbers > oddNumbers;

    let isEvenArray = []
    
    for (let i = 0; i < numbers.length; i ++){
        if((isEven && numbers[i] % 2 !== 0) || (!isEven && numbers[i] % 2 === 0)){   
            
            isEvenArray.push(numbers[i])

        } 
    }

    return isEvenArray    // Por si acaso, aunque no debería llegar aquí
    
}




// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10 6 5")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 7 5 13 6"))  // --> 2
