const mod10Service = require("../src/services/mod10Service");

test("Valida a lógica do dívido verificador, módulo 10", () => {
  expect(mod10Service("001905009")).toBe(
    5
  );
});
