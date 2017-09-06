const parseMask = require('../src/parseMask.js');
const assert = require('assert');

describe('parseMask', () => {
  it('should not allow invalid mask', () => {
    assert.throws(() => parseMask('127.45.12.74/33'), /Invalid mask/);
  });
  it('should not allow invalid ip', () => {
    assert.throws(() => parseMask('256.45.12.74/31'), /Invalid byte/);
  });
  it('should parse ip', () => {
    const result = parseMask('1.2.3.4/12');
    assert.strictEqual(result.ip, 0x01020304, 'Invalid ip');
    assert.strictEqual(result.size, 1048576, 'Invalid ip stack size');
    assert.strictEqual(result.start, 0x1000000, 'Invalid start ip');
    assert.strictEqual(result.end, 0x10FFFFF, 'Invalid end ip');
    assert.strictEqual(result.bits, 12, 'Invalid mask bits');
    assert.strictEqual(result.subnet, 0xfff00000, 'Invalid subnet mask');
    assert.strictEqual(result.negativeSubnet, 0x000fffff, 'Invalid negative subnet mask');
  });
});