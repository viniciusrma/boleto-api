const express = require("express");
const app = express();
const {
  validBarCode,
  stringLengthCheck,
} = require("../services/barCodeService");

app.get("/boleto/:id", (request, response) => {
  const barCode = request.params;

  //const amount = request.params[]

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
    amount: "",
    expirationDate: "",
  });
});

app.listen(8000);

//http://localhost:8080/boleto/21290001192110001210904475617405975870000002000
