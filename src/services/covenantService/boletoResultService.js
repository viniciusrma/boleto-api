const barCodeService = require("./barCodeService");
const getAmountService = require("./getAmountService");
const expirationDateService = require("./expirationDateService");

module.exports = function getResult(str) {
  const newBarCode = barCodeService(str);
  const amount = getAmountService(newBarCode);
  const expirationDate = expirationDateService(newBarCode);
  
  let result = {};

  if (expirationDate !== false) {
    result.str = newBarCode;
    result.amount = amount;
    result.expirationDate = expirationDate;
  } else {
    result.str = newBarCode;
    result.amount = amount;
  }

  return result;
};
