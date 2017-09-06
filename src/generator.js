const parseMask = require('./parseMask.js');

module.exports = function* (ipMasked) {
  const cidr = parseMask(ipMasked);
  let current = cidr.start;
  
  while(true) {
    yield current++;
    if (current > cidr.end) {
      return;
    }
  }
};