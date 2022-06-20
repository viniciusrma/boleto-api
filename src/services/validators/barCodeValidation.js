module.exports = function barCodeValidation(barCode) {
  if (
    barCode.length < 47 ||
    barCode.length > 48 ||
    (barCode.length >= 48 && barCode.substring(0, 1) !== "8") ||
    (barCode.length < 47 && barCode.substring(0, 1) === "8")
  )
    return "Código do boleto inválido!";

  if (!/^[0-9]{47,48}$/.test(barCode))
    return "O código do boleto deve conter apenas números!";

  if (barCode.length === 47 && barCode.substring(0, 1) === "8")
    return "Boleto inválido!";

  return true;
};
