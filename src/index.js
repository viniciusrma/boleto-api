const isNumber = require("../services/barCodeService");
const expirationDate = require("../services/expirationDateService");
const amountValue = require("../services/amountService");
const verifier = require("../services/verifierDigit");

const express = require("express");

const app = express();

app.get("/boleto/:id", (request, response) => {
  const barCode = request.params.id;

  //valida se o código possui apenas números
  if (!isNumber(barCode)) {
    return response
      .status(400)
      .json({ error: "Por favor digite apenas números" });
  }

  //add validação da quantidade de dígitos

  //valida DV dos campos 1, 2 e 3
  verifier(barCode);
  if (!verifier(barCode)) {
    return response
      .status(400)
      .json({
        error:
          "Dígito(s) verificador(es) inválido(s), favor verificar o código inserido.",
      });
  }

  return response.status(200).json({
    barCode: barCode,
    amount: amountValue(barCode),
    expirationDate: expirationDate(barCode),
  });
});

app.listen(8000);

// 2129000119211000121090447561740 5975870000002000
