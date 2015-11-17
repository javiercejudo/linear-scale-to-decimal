/*jshint node:true */

'use strict';

function toDecimalFactory(Decimal) {
  return function toDecimal(n) {
    return new Decimal(n.toString());
  };
}

module.exports = function factory(Decimal) {
  var toDecimal = toDecimalFactory(Decimal);

  return function scaleToDecimal(scale) {
    return scale.map(toDecimal);
  };
};
