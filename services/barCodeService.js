// Valida se o a string é valida, devendo ser estritamente numérica

module.exports = function isNumber(str) {
  return !isNaN(parseFloat(str)) && isFinite(str);
};
