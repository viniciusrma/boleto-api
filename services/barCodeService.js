module.exports = function isNumber(str) {
  return !isNaN(parseFloat(str)) && isFinite(str);
};
