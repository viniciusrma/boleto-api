const isNumber = require("../services/barCodeService");
const expirationDate = require("../services/expirationDateService");
const amountValue = require("../services/amountService");

const express = require("express");
const app = express();
const {
  validBarCode,
  stringLengthCheck,
} = require("../services/barCodeService");

app.get("/boleto/:id", (request, response) => {
  const barCode = request.params;

  //valida se o código possui apenas números
  if (!isNumber(barCode)) {
    return response
      .status(400)
      .json({ error: "Por favor digite apenas números ❌" });
  }

  if (!validBarCode(barCode.id)) {
    return response.status(400).json({
      error: "Código de barras inválido ❌",
    });
  }

  if (!stringLengthCheck(barCode.id)) {
    return response.status(400).json({
      error: "O código de barras deve ter entre 44 e 45 digítos ❌",
    });
  }

  return response.status(200).json({
    barCode: barCode.id,
    amount: amountValue(barCode),
    expirationDate: expirationDate(barCode),
  });
});

app.listen(8000);

//http://localhost:8080/boleto/21290001192110001210904475617405975870000002000
