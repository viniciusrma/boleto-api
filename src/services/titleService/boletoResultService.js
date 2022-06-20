const barCodeService = require("./barCodeService");
const getAmountService = require("./getAmountService");
const expirationDateService = require("./expirationDateService");

module.exports = function getResult(str) {
  const validBarCode = barCodeService(str);
  const amount = getAmountService(str);
  const expirationDate = expirationDateService(str);

  let result = {
    validBarCode,
    amount,
    expirationDate,
  };

  return result;
};
