const mod10 = require("./mod10Service");

module.exports = function verifier(code) {
  // retornar valores correspondentes aos campos 1, 2 e 3
  const field1 = code.substr(0, 9);
  const field2 = code.substr(10, 10);
  const field3 = code.substr(21, 10);

  // retornar os campos referentes aos dígitos verificadores dos campos 1, 2 e 3
  const verifierField1 = code.substr(9, 1);
  const verifierField2 = code.substr(20, 1);
  const verifierField3 = code.substr(31, 1);

  if (
    verifierField1 == mod10(field1) &&
    verifierField2 == mod10(field2) &&
    verifierField3 == mod10(field3)
  ) {
    return true;
  } else {
    return false;
  }
};

// cod barras para testar: 00190500954014481606906809350314337370000000100

// campo 1: 00190.5009[5] DV
// campo 2: 40144.81606[9] DV
// campo 3: 06809.35031[4] DV
