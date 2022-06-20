module.exports = function getAmount(barCode) {
  const currency = parseFloat(barCode.substring(4, 13));
  const coin = barCode.substring(13, 15);
  const boletoAmount = currency.toString() + "." + coin;
  return boletoAmount;
};
