const mod10Service = require("../services/mod10Service");

test("Validação da lógica do dívido verificador, módulo 10", () => {
  expect(mod10Service("001905009")).toBe(
    5
  );
});
