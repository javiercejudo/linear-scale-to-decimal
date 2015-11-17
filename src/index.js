/*jshint node:true */

'use strict';

var toDecimalFactory = require('to-decimal-arbitrary-precision');

module.exports = function factory(Decimal) {
  var toDecimal = toDecimalFactory(Decimal);

  return function scaleToDecimal(scale) {
    return scale.map(toDecimal);
  };
};
