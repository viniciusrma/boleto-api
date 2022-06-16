const expirationDateService = require("../src/services/expirationDateService");

test("Checa a string recebida e retorna uma data válida baseada no cálculo entre a data inicial e a data encontrada pela lógica aplicada", () => {
  expect(expirationDateService("2129000119211000121090475617405975870000002000")).toBe(
    "2018-07-16"
  );
});
