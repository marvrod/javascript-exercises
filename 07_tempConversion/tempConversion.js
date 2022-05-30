const ftoc = function(fTemp) {
 let result = 5*(fTemp-32)/9;
 result = (Math.round(result*10))/10;

return result;
};

const ctof = function(cTemp) {
let result = (9*cTemp/5)+32;
result = (Math.round(result*10))/10;

return result;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
