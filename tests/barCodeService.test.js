const barCodeService = require("../services/barCodeService");

test("checks string received and returs TRUE if isNan returns FALSE and isFinite returns TRUE", () => {
  expect(
    barCodeService("2129000119211000121090475617405975870000002000")
  ).toBe(true);
});
