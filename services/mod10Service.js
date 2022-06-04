module.exports = function mod10(str) {
  const value = str.split("");
  const ponderation = [...value].reverse().map((v, index) => {
    // multiplicadores iniciam em 2 e alterna entre 2 e 1 (21212...)
    // como o index começa em 0, os index pares terão multiplicadores 2 e os impares 1
    const weight = index % 2 == 0 ? 2 : 1;
    return weight * v;
  });

  // somar índices do valor caso seja maior que 9
  function sumValue(value) {
    const arrOfValues = Array.from(String(value), Number);
    return arrOfValues[0] + arrOfValues[1];
  }

  function sum(arr) {
    // substituir valor maior que 9 por sua soma
    arr.map((value, index) => {
      if (value > 9) {
        arr[index] = sumValue(value);
      }
    });
    // somar todos os valores
    return arr.reduce((prev, next) => prev + next, 0);
  }

  const rest = sum(ponderation) % 10;

  function toNextTen(val) {
    return Math.ceil(val / 10) * 10;
  }

  // Subtrair o “resto” apurado pela dezena imediatamente posterior
  const verifier = toNextTen(sum(ponderation)) - rest;

  // Último dígito do verifier (30 – 5 -> DV = 5)
  return Array.from(String(verifier), Number)[1];
};
