var should = require('chai').should();
var a = require('../lib/arrispwgen');
// import generate from '../lib/arrispwgen';

describe("Color Code Converter", function() {
    let d = new Date(2016, 11, 3);
    let potd = a.generate(d, 'MPSJKMDHAI');
    // expect(potd).to.equal('DTARW8TPKM');
    potd.should.equal('DTARW8TPKM');
});
