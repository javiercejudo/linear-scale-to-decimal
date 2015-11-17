/*jshint node:true, mocha:true */

'use strict';

require('should');

var adapter = require('floating-adapter');
var Decimal = require('linear-arbitrary-precision')(adapter);
var scaleToDecimal = require('../src/')(Decimal);
var isFunction = require('lodash.isfunction');

describe('scale to decimal', function() {
  it('should return a scale with decimals', function() {
    var scale = scaleToDecimal([32, 33.8]);

    [scale[0].plus, scale[1].plus].every(isFunction).should.be.exactly(true);
  });
});
