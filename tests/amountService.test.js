const amountService = require("../services/amountService");

test("cut string received starting on position 37 and divides it for 100, returning the fixed value", () => {
  expect(amountService("21290001192110001210904475617405975870000002000")).toBe("20.00");
});
