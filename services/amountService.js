// Calcula o valor do boleto

module.exports = function amountValue(str) {
  const amount = (parseFloat(str.substr(37)) / 100).toFixed(2);
  return amount;
};

// 2129000119211000121090475617405975870000002000 deve retornar = true
// a129000119211000121090475617405975870000002000 deve retornar = false
