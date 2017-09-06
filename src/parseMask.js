module.exports = function(mask) {
  const exploded = mask.match(/([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3})\/([0-9]{1,2})/);
  if (!exploded || exploded.length < 6 || exploded[5] > 32 || exploded[5] <= 0) {
    throw new Error('Invalid mask');
  }

  const bits = parseInt(exploded[5]);
  const subnet = (0xFFFFFFFF << (32-bits))>>>0;
  const negativeSubnet = (0xFFFFFFFF ^ subnet)>>>0;
  let ip = 0;
  
  exploded.slice(1, -1).forEach((el, i) => {
    const byte = parseInt(el);
    if (isNaN(byte) || byte > 255 || byte < 0) {
      throw new Error('Invalid byte');
    }
    ip = (ip | parseInt(el) << (24 - i * 8))>>>0;
  });

  const start = (ip & subnet)>>>0;
  const end = (start | negativeSubnet)>>>0;
  const size = Math.pow(2, 32 - bits);
 
  return {
    ip,
    size,
    start,
    end,
    bits,
    subnet,
    negativeSubnet
  };
};