module.exports = function getAmount(str) {
  const currency = parseFloat(
    str.substring(str.length - 10, str.length - 2)
  );
  const coin = str.substring(str.length - 2, str.length);
  const boletoAmount = currency.toString() + "." + coin;

  return boletoAmount;
};
