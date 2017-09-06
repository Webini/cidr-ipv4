const stringify = require('../src/stringify.js');
const assert = require('assert');

describe('stringify ip', () => {
  it('should stringify', () => {
    assert.equal(stringify(0xfff00ff0), '255.240.15.240');
  });
});