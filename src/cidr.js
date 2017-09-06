const stringify = require('./stringify.js');
const generator = require('./generator.js');
const parse     = require('./parseMask.js');

module.exports = {
  parse,
  stringify,
  iterate: generator
};