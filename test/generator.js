const generator = require('../src/generator.js');
const assert = require('assert');

describe('generator', () => {
  it('should iterate', () => {
    const out = [];
    
    for(const ip of generator('1.2.3.4/28')) {
      out.push(ip);
    }
  
    assert.deepStrictEqual(out, [
      0x01020300,
      0x01020301,
      0x01020302,
      0x01020303,
      0x01020304,
      0x01020305,
      0x01020306,
      0x01020307,
      0x01020308,
      0x01020309,
      0x0102030a,
      0x0102030b,
      0x0102030c,
      0x0102030d,
      0x0102030e,
      0x0102030f
    ]);
  });
});