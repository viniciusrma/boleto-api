const titleBoletoCheck = require("../services/titleService/barCodeService");
const titleResult = require("../services/titleService/boletoResultService");
const covenantBoletoCheck = require("../services/covenantService/barCodeService");
const covenantResult = require("../services/titleService/boletoResultService");

const validation = require("../services/validators/barCodeValidation");

module.exports = {
  barCode: async (req, res) => {
    const barCode = req.params.code;

    const funcValueTest =
      barCode.length === 47
        ? titleBoletoCheck(barCode)
        : covenantBoletoCheck(barCode);

    let error = {};

    if (validation(barCode) === true && funcValueTest !== false) {
      barCode.length === 47
        ? res.status(200).json(titleResult(barCode))
        : res.status(200).json(covenantResult(barCode));
    } else {
      if (validation(barCode) !== true) {
        error.error = validation(barCode);
      } else {
        error.error =
          "Código do boleto contém caracteres inválidos. Apenas números permitidos.";
      }

      res.status(400).json(error);
    }
  },
};
