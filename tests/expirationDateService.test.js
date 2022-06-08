const expirationDateService = require("../services/expirationDateService");

test("checks string received and returns the starting day in milliseconds + the expiration date in milliseconds, then converts into a valid date", () => {
  expect(expirationDateService("2129000119211000121090475617405975870000002000")).toBe(
    "2018-07-16"
  );
});
