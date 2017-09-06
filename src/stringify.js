module.exports = function(ip) {
  const blocks = [];
  for (let i = 24; i >= 0; i-=8) {
    blocks.push((((0xFF << i) & ip) >> i & 0xFF).toString());
  }

  return blocks.join('.');
};