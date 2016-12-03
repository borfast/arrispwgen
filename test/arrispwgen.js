'use strict';

// Mocha doesn't deal well with ES6 yet, have to use ES5.
require('chai').should();
var a = require('../lib/arrispwgen');
var data = require('./data');

describe('Arrispwgen', function() {
    it('should generate the correct password for a given day with the default seed', function () {
        data.using_default_seed.forEach(function (e) {
            var potd = a.generate(e.date);
            potd.should.equal(e.potd);
        });
    });

    it('should generate the correct password for a given day with a custom seed', function () {
        data.using_custom_seed.forEach(function (e) {
            var potd = a.generate(e.date, data.custom_seed);
            potd.should.equal(e.potd);
        });
    });
});
