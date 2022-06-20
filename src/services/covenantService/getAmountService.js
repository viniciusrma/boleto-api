module.exports = function getAmount(str) {
  const currency = parseFloat(str.substring(4, 13));
  const coin = str.substring(13, 15);
  const boletoAmount = currency.toString() + "." + coin;
  return boletoAmount;
};
