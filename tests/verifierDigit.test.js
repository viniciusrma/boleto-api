const verifierDigit = require("../src/services/verifierDigit");

test("Quebra o array e identifica o dígito verificador", () => {
  expect(
    verifierDigit("00190500954014481606906809350314337370000000100")
  ).toBeTruthy();
});
