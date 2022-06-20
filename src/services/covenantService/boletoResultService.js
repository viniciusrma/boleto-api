const barCodeService = require("./barCodeService");
const getAmountService = require("./getAmountService");
const expirationDateService = require("./expirationDateService");

module.exports = function getResult(barCode) {
  const newBarCode = barCodeService(barCode);
  const amount = getAmountService(newBarCode);
  const expirationDate = expirationDateService(newBarCode);
  
  let result = {};

  if (expirationDate !== false) {
    result.barCode = newBarCode;
    result.amount = amount;
    result.expirationDate = expirationDate;
  } else {
    result.barCode = newBarCode;
    result.amount = amount;
  }

  return result;
};
