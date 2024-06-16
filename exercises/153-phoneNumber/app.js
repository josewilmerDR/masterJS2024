function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  let areaCode = this.getAreaCode();
  let exchangeCode = this.getExchangeCode();
  let lineNumber = this.getLineNumber();
  
  // Formatear el número en "(000) 000-0000"
  return this.parenthesize(areaCode) + ' ' + exchangeCode + '-' + lineNumber;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  /// Extraer los primeros 3 números
  return this.slice(0, 3);
  
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  //Entraer los siguientes tres numeros
  return this.slice(3, 6);
  
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  //Entraer los siguientes cuatro numeros
  return this.slice(6, 10);
  
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};

let number = new PhoneNumberFormatter([6,5,0,8,3,5,9,1,7,2]);
console.log(number.render()); // --> "(650) 835-9172"
