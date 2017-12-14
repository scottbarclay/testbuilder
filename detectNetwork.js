// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

  var network = '';
  var numberLength = cardNumber.length;
  if(numberLength === 14 && (cardNumber.slice(0, 2) === '38' || cardNumber.slice(0, 2) === '39')) {
    network = 'Diner\'s Club';
  } else if(numberLength === 15 && (cardNumber.slice(0, 2) === '34' || cardNumber.slice(0, 2) === '37')) {
    network = 'American Express';
  } else if((numberLength === 13 || numberLength === 16 || numberLength === 19) && cardNumber.slice(0, 1) === '4') {
    network = 'Visa';
  } else if(numberLength === 16 && (cardNumber.slice(0, 2) > Number('50') || cardNumber.slice(0, 2) < Number('56') )) {
    network = 'MasterCard';
  }
  return network;
};


