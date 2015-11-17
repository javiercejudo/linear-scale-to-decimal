# linear-scale-to-decimal

[![Build Status](https://travis-ci.org/javiercejudo/linear-scale-to-decimal.svg)](https://travis-ci.org/javiercejudo/linear-scale-to-decimal)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/linear-scale-to-decimal/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/linear-scale-to-decimal?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/linear-scale-to-decimal/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/linear-scale-to-decimal)

Ensures a linear presets has decimals

## Install

    npm i linear-scale-to-decimal

## Usage

```js
var Decimal = require('linear-arbitrary-precision')(require('floating-adapter'));
var scaleToDecimal = require('linear-scale-to-decimal')(Decimal);

scaleToDecimal([32, 33.8]);
// => [new Decimal('32'), new Decimal('33.8')]
```

## Related projects

- [linear-presets](https://github.com/javiercejudo/linear-presets): linear presets for common units.
- [linear-converter](https://github.com/javiercejudo/linear-converter): flexible linear converter.
