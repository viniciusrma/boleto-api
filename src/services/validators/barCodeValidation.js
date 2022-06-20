module.exports = function barCodeValidation(str) {
  if (
    str.length < 47 ||
    str.length > 48 ||
    (str.length >= 48 && str.substring(0, 1) !== "8") ||
    (str.length < 47 && str.substring(0, 1) === "8")
  )
    return "Código do boleto inválido!";

  if (!/^[0-9]{47,48}$/.test(str))
    return "O código do boleto deve conter apenas números!";

  if (str.length === 47 && str.substring(0, 1) === "8")
    return "Boleto inválido!";

  return true;
};
