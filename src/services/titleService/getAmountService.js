module.exports = function getAmount(barCode) {
  const currency = parseFloat(
    barCode.substring(barCode.length - 10, barCode.length - 2)
  );
  const coin = barCode.substring(barCode.length - 2, barCode.length);
  const boletoAmount = currency.toString() + "." + coin;

  return boletoAmount;
};
