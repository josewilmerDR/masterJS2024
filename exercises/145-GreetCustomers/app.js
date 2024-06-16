
 // Objeto que contiene los datos de los clientes

let customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};


function greetCustomer(name) {
 

  if(customerData[name]){

    let visitas = customerData[name].visits

    if(visitas === 1){
      return 'Welcome back, Joe! We are glad you liked us the first time!'
    } else if( visitas >= 2){
      return 'Welcome back, Carol! So glad to see you again!'
    }

  }else{
    return 'Welcome! Is this your first time?'
  }

  

}

console.log(greetCustomer('Jose')); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
