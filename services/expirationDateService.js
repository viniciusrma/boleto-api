// Cálculo da data de expiração do boleto

module.exports = function expirationDate(str) {
  // fator de vencimento: a partir do 33º valor, 4 números
  const expiration = str.substr(32, 4);

  const inicialDate = new Date("10/07/1997");
  const expDate = new Date(inicialDate.getTime() + expiration * 86400000)
    .toISOString()
    .substr(0, 10);
  return expDate;
};
