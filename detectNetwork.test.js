/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
//var FILL_ME_IN = 'Fill this value in';
 
//describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  // it('Doesn\'t throw an error, so it doesn\'t fail', function() {
  //   // This test doesn't really test anything at all! It will pass no matter what.
  //   var even = function(num){
  //     return num % 2 === 0;
  //   }
  //   return even(10) === true;
  // });

  // // In tests, we want to compare the expected behavior to the actual behavior.
  // // A test should only fail if the expected behavior doesn't match the actual.
  // it('Throws an error when expected behavior does not match actual behavior', function() {
  //   var even = function(num){
  //     return num % 2 === 0;
  //   }

  //   if(even(10) !== true) {
  //     throw new Error('10 should be even!');
  //   }
  // });
  
// The Diner's Club network always starts with a 38 or 39 and is 14 digits long
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...
  it('has a prefix of 38 and a length of 14', function() {
    //throw new Error('Delete me!'); 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    } 
  });
});
// The American Express network always starts with a 34 or 37 and is 15 digits long
describe('American Express', function() {
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    } 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759, and a length of 16, 18, or 19
describe('Switch', function() {
  var expect = chai.expect;

  it('has a prefix of 4903 and a length of 16', function() {
    expect(detectNetwork('4903234567890123')).to.equal('Switch');
  });

  it('has a prefix of 4903 and a length of 18', function() {
    expect(detectNetwork('490323456789012345')).to.equal('Switch');
  });

  it('has a prefix of 4903 and a length of 19', function() {
    expect(detectNetwork('4903234567890123456')).to.equal('Switch');
  });
  
  it('has a prefix of 4905 and a length of 16', function() {
    expect(detectNetwork('4905234567890123')).to.equal('Switch');
  });

  it('has a prefix of 4905 and a length of 18', function() {
    expect(detectNetwork('490523456789012345')).to.equal('Switch');
  });

  it('has a prefix of 4905 and a length of 19', function() {
    expect(detectNetwork('4905234567890123456')).to.equal('Switch');
  });
  
  it('has a prefix of 4911 and a length of 16', function() {
    expect(detectNetwork('4911234567890123')).to.equal('Switch');
  });

  it('has a prefix of 4911 and a length of 18', function() {
    expect(detectNetwork('491123456789012345')).to.equal('Switch');
  });

  it('has a prefix of 4911 and a length of 19', function() {
    expect(detectNetwork('4911234567890123456')).to.equal('Switch');
  });
  
  it('has a prefix of 4936 and a length of 16', function() {
    expect(detectNetwork('4936234567890123')).to.equal('Switch');
  });

  it('has a prefix of 4936 and a length of 18', function() {
    expect(detectNetwork('493623456789012345')).to.equal('Switch');
  });

  it('has a prefix of 4936 and a length of 19', function() {
    expect(detectNetwork('4936234567890123456')).to.equal('Switch');
  });
  
  it('has a prefix of 6333 and a length of 16', function() {
    expect(detectNetwork('6333234567890123')).to.equal('Switch');
  });

  it('has a prefix of 6333 and a length of 18', function() {
    expect(detectNetwork('633323456789012345')).to.equal('Switch');
  });

  it('has a prefix of 6333 and a length of 19', function() {
    expect(detectNetwork('6333234567890123456')).to.equal('Switch');
  });

  it('has a prefix of 6759 and a length of 16', function() {
    expect(detectNetwork('6759234567890123')).to.equal('Switch');
  });

  it('has a prefix of 6759 and a length of 18', function() {
    expect(detectNetwork('675923456789012345')).to.equal('Switch');
  });

  it('has a prefix of 6759 and a length of 19', function() {
    expect(detectNetwork('6759234567890123456')).to.equal('Switch');
  });
  
  it('has a prefix of 564182 and a length of 16', function() {
    expect(detectNetwork('5641824567890123')).to.equal('Switch');
  });

  it('has a prefix of 564182 and a length of 18', function() {
    expect(detectNetwork('564182456789012345')).to.equal('Switch');
  });

  it('has a prefix of 564182 and a length of 19', function() {
    expect(detectNetwork('5641824567890123456')).to.equal('Switch');
  });
  
  it('has a prefix of 633110 and a length of 16', function() {
    expect(detectNetwork('6331104567890123')).to.equal('Switch');
  });

  it('has a prefix of 633110 and a length of 18', function() {
    expect(detectNetwork('633110456789012345')).to.equal('Switch');
  });

  it('has a prefix of 633110 and a length of 19', function() {
    expect(detectNetwork('6331104567890123456')).to.equal('Switch');
  });
});

// Visa always has a prefix of 4 and a length of 13, 16, or 19
describe('Visa', function() {
  var assert = chai.assert;

  it('has a prefix of 4903 and a length of 16', function() {
    assert(detectNetwork('4903234567890123')) === ('Visa');
  });

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

// MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16
describe('Mastercard', function() {
  var assert = chai.assert;

  it('has a prefix of 51 and a length of 16', function() {
    assert(detectNetwork('5123456789012345') === 'MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    assert(detectNetwork('5223456789012345') === 'MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    assert(detectNetwork('5323456789012345') === 'MasterCard');
  });

  it('has a prefix of 54 and a length of 16', function() {
    assert(detectNetwork('5423456789012345') === 'MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    assert(detectNetwork('5523456789012345') === 'MasterCard');
  });
});

// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19
describe('Discover', function() {
  var expect = chai.expect;

  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6591234567890123')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6591234567890123456')).to.equal('Discover');
  });

  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '1234567890123')).to.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '1234567890123456')).to.equal('Discover');
      });
    })(prefix);
  } 

  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011234567890123')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011234567890123456')).to.equal('Discover');
  });
});

// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19
describe('Maestro', function() {
  var expect = chai.expect;

  for (var length = 12; length <= 19; length++) {
    (function(length) {
      it('has a prefix of 5018 and a length of ' + length, function() {
        expect(detectNetwork('5018123456789012345'.slice(0, length))).to.equal('Maestro');
      });
       it('has a prefix of 5020 and a length of ' + length, function() {
        expect(detectNetwork('5020123456789012345'.slice(0, length))).to.equal('Maestro');
      });
      it('has a prefix of 5038 and a length of ' + length, function() {
        expect(detectNetwork('5038123456789012345'.slice(0, length))).to.equal('Maestro');
      });
      it('has a prefix of 6304 and a length of ' + length, function() {
        expect(detectNetwork('6304123456789012345'.slice(0, length))).to.equal('Maestro');
      });
    })(length);
  }
});

// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19
describe('China UnionPay', function() {
  var expect = chai.expect;

  for (var prefix = 624; prefix <= 626; prefix++) {
    for (var length = 16; length <= 19; length++) {
      (function(prefix, length) {
        it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
          expect(detectNetwork(prefix + '1234567890123456'.slice(0, length))).to.equal('China UnionPay');
        });
        it('has a prefix of at least 624', function() {
          expect(prefix).to.be.at.least(624);
        });
      })(prefix, length);
    }
  }

  for (var prefix = 6282; prefix <= 6288; prefix++) {
    for (var length = 16; length <= 19; length++) {
      (function(prefix, length) {
        it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
          expect(detectNetwork(prefix + '1234567890123456'.slice(0, length))).to.equal('China UnionPay');
        });
        it('has a prefix of at least 6282', function() {
          expect(prefix).to.be.at.least(6282);
        });
      })(prefix, length);
    }
  }

  for (var prefix = 622126; prefix <= 622925; prefix++) {
    for (var length = 16; length <= 19; length++) {
      (function(prefix, length) {
        it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
          expect(detectNetwork(prefix + '1234567890123456'.slice(0, length))).to.equal('China UnionPay');
        });
        it('has a prefix of at least 622126', function() {
          expect(prefix).to.be.at.least(622126);
        });

      })(prefix, length);
    }
  } 
});
