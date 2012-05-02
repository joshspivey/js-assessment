if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([ 'use!underscore' ], function(_) {
  describe("flow control", function() {
    var fn;

    beforeEach(function() {
      fn = function() { };
    });

    it("you should be able to conditionally branch your code", function() {
      fn = function() {
        // write a function that receives a number as its argument;
        // if the number is divisible by 3, the function should return 'fizz';
        // if the number is divisible by 5, the function should return 'buzz';
        // if the number is divisible the 3 and 5, the function should return
        // 'fizzbuzz';
        // otherwise the function should return the number
      };

      // replace the following test with tests that prove your function works
      expect(fn()).to.be.ok();
    });

    it("you should be able to work with logical operators", function() {
      var and = function(val1, val2) {
            // write a function that makes the tests below pass
          },

          or = function(val1, val2) {
            // write a function that makes the tests below pass
          };

      expect(and(false, false)).not.to.be.ok();
      expect(and(true, false)).not.to.be.ok();
      expect(and(true, true)).to.be.ok();

      expect(or(true, false)).to.be.ok();
      expect(or(true, true)).to.be.ok();
      expect(or(false, false)).not.to.be.ok();
    });
  });

});
