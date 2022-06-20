const validator = require("../validators/barCodeValidation");
const titleValidator = require("../validators/titleBarCodeValidation");

// Valida o boleto, quebrando-o em 3 partes e verifica os dígitos verificadores

module.exports = function barCodeService(str) {
  const field1 = str.substring(0, 9);
  const verifierField1 = Number(str.substring(9, 10));

  const field2 = str.substring(10, 20);
  const verifierField2 = Number(str.substring(20, 21));

  const field3 = str.substring(21, 31);
  const verifierField3 = Number(str.substring(31, 32));

  if (
    !validator(field1, verifierField1) ||
    !validator(field2, verifierField2) ||
    !validator(field3, verifierField3)
  )
    return false;

  const bank = str.substring(0, 4);
  const vd = str.substring(32, 33);
  const expirationDate = str.substring(33, 37);
  const value = str.substring(str.length - 10, str.length);
  const field1rest = str.substring(4, 9);
  const field2rest = str.substring(10, 20);
  const field3rest = str.substring(21, 31);

  const newBarCode =
    bank + vd + expirationDate + value + field1rest + field2rest + field3rest;

  if (!titleValidator(newBarCode, vd)) return false;

  return newBarCode;
};
