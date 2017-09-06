const cidr = require('../src/cidr.js');

console.log('cidr.parse : ');
const results = cidr.parse('1.2.3.128/12');
console.log(`\
  Original ip   : ${cidr.stringify(results.ip)}
  Start ip      : ${cidr.stringify(results.start)}
  End ip        : ${cidr.stringify(results.end)}
  Wildcard mask : ${cidr.stringify(results.subnetMask)}
  Inversed mask : ${cidr.stringify(results.negativeSubnet)}
  Ip stack size : ${results.size}
  Mask bits     : ${results.bits}
`);

console.log('cidr.iterate : ');
for (const ip of cidr.iterate('127.140.200.10/30')) {
  console.log(`  ip : ${cidr.stringify(ip)}`);
}