const validator = require("../validators/barCodeValidation");
const titleValidator = require("../validators/titleBarCodeValidation");

// Valida o boleto, quebrando-o em 3 partes e verifica os dígitos verificadores

module.exports = function barCodeService(barCode) {
  const field1 = barCode.substring(0, 9);
  const verifierField1 = Number(barCode.substring(9, 10));

  const field2 = barCode.substring(10, 20);
  const verifierField2 = Number(barCode.substring(20, 21));

  const field3 = barCode.substring(21, 31);
  const verifierField3 = Number(barCode.substring(31, 32));

  if (
    !validator(field1, verifierField1) ||
    !validator(field2, verifierField2) ||
    !validator(field3, verifierField3)
  )
    return false;

  const bank = barCode.substring(0, 4);
  const vd = barCode.substring(32, 33);
  const expirationDate = barCode.substring(33, 37);
  const value = barCode.substring(barCode.length - 10, barCode.length);
  const field1rest = barCode.substring(4, 9);
  const field2rest = barCode.substring(10, 20);
  const field3rest = barCode.substring(21, 31);

  const newBarCode =
    bank + vd + expirationDate + value + field1rest + field2rest + field3rest;

  if (!titleValidator(newBarCode, vd)) return false;

  return newBarCode;
};
