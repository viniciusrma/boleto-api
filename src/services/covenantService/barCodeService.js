const validator = require("../validators/verifierDigitValidation");
const covenantValidator = require("../validators/covenantBarCodeValidation");

// Quebra o boleto de convênio em 4 partes e valida os dígitos verificadores

module.exports = function barCodeService(barCode) {
  const field1 = barCode.substring(0, 11);
  const verifierField1 = Number(barCode.substring(11, 12));

  const field2 = barCode.substring(12, 23);
  const verifierField2 = Number(barCode.substring(23, 24));

  const field3 = barCode.substring(24, 35);
  const verifierField3 = Number(barCode.substring(35, 36));

  const field4 = barCode.substring(36, 47);
  const verifierField4 = Number(barCode.substring(47, 48));

  if (
    !validator(field1, verifierField1) ||
    !validator(field2, verifierField2) ||
    !validator(field3, verifierField3) ||
    !validator(field4, verifierField4)
  )
    return false;

  const code = field1 + field2 + field3 + field4;

  const newBarCode = covenantValidator(code);

  return newBarCode;
};
