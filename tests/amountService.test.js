const amountService = require("../src/services/amountService");

test("Identifica o valor do boleto pela string recebida", () => {
  expect(amountService("21290001192110001210904475617405975870000002000")).toBe(
    "20.00"
  );
});
