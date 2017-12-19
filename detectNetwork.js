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
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759, and a length of 16, 18, or 19.

  var network = '';
  var numLen = cardNumber.length;
  var num = cardNumber;
  if (numLen === 14 && (num.slice(0, 2) === '38' || num.slice(0, 2) === '39')) {
    network = 'Diner\'s Club';
  } else if(numLen === 15 && (num.slice(0, 2) === '34' || num.slice(0, 2) === '37')) {
    network = 'American Express';
  } else if(numLen === 16 && (num.slice(0, 2) >= '51' && num.slice(0, 2) <= '55')) {
    network = 'MasterCard';
  } else if((numLen === 16 || numLen === 19) && 
      (num.slice(0, 4) === '6011' ||
      (num.slice(0, 3) >= '644' && num.slice(0, 3) <= '649') || 
       num.slice(0, 2) === '65')) {
    network = 'Discover';     
  } else if((numLen >= 12 && numLen <= 19) && 
    (num.slice(0, 4) === '5018' || 
    num.slice(0, 4) === '5020' || 
    num.slice(0, 4) === '5038' || 
    num.slice(0, 4) === '6304')) {
    network = 'Maestro';
  } else if((numLen >= 16 && numLen <= 19) && 
    (num.slice(0, 3) >= '624' && num.slice(0, 3) <= '626') ||
    (num.slice(0, 4) >= '6282' && num.slice(0, 4) <= '6288') ||
    (num.slice(0, 6) >= '622126' && num.slice(0, 6) <= '622925')) {
    network = 'China UnionPay';
  } else if((numLen === 16 || numLen === 18 || numLen === 19) &&
    (num.slice(0, 4) === '4903' || 
    num.slice(0, 4) === '4905' ||
    num.slice(0, 4) === '4911' ||
    num.slice(0, 4) === '4936' || 
    num.slice(0, 6) === '564182' || 
    num.slice(0, 6) === '633110' || 
    num.slice(0, 4) === '6333' || 
    num.slice(0, 4) === '6759')) {
    network = 'Switch';
  } else if(((numLen === 16 || numLen === 19) && 
    num.slice(0, 1) === '4' && (num.slice(0, 4) !== '4903' && num.slice(0, 4) !== '4905' && 
    num.slice(0, 4) !== '4911' && num.slice(0, 4) !== '4936')) || 
    (numLen === 13  && num.slice(0, 1) === '4')) {
    network = 'Visa';
  }
  return network;
};


