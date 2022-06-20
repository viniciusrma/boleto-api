const barCodeService = require("./barCodeService");
const getAmountService = require("./getAmountService");
const expirationDateService = require("./expirationDateService");

module.exports = function getResult(barCode) {
  const validBarCode = barCodeService(barCode);
  const amount = getAmountService(barCode);
  const expirationDate = expirationDateService(barCode);

  let result = {
    validBarCode,
    amount,
    expirationDate,
  };

  return result;
};
