const barCodeService = require("../src/services/barCodeService");

test("Checa a string recebida e a valida", () => {
  expect(
    barCodeService("2129000119211000121090475617405975870000002000")
  ).toBeTruthy();
});
