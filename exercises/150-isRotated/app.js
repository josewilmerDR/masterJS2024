function isRotated(str1, str2) {
    // your code here
    
    if(str1.length !== str2.length){
      return false
    }

    let concatenated = str1+str2

    return concatenated.includes(str2)
    // return concatenated

  }
  
  console.log(isRotated('hello world', 'orldhello w')); // --> true
  console.log(isRotated('hello world', 'omrel wp')); // --> false
  
