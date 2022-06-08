const verifierDigit = require("../services/verifierDigit");

test("Quebra do array e identificação do dígito verificador", () => {
  expect(
    verifierDigit("00190500954014481606906809350314337370000000100")
  ).toBeTruthy();
});
