module.exports = function mod10(str) {
  
  // converte a string recebida em array
  const value = str.split("");

  // multiplica a sequência dos campos pelos multiplicadores direita para a esquerda
  const ponderation = [...value].reverse().map((v, index) => {
    // multiplicadores iniciam em 2 e alterna entre 2 e 1 (21212...)
    // como o index começa em 0, os index pares terão multiplicadores 2 e os impares 1
    const weight = index % 2 == 0 ? 2 : 1;
    return weight * v;
  });

  // soma índices do valor caso seja maior que 9
  function sumValue(value) {
    const arrOfValues = Array.from(String(value), Number);
    return arrOfValues[0] + arrOfValues[1];
  }

  function sum(arr) {
    // substitui valor maior que 9 pela soma dos 2 números contidos
    arr.map((value, index) => {
      if (value > 9) {
        arr[index] = sumValue(value);
      }
    });
    // reduz todos os valores à sua soma
    return arr.reduce((prev, next) => prev + next, 0);
  }

  const rest = sum(ponderation) % 10;

  function toNextTen(val) {
    return Math.ceil(val / 10) * 10;
  }

  // Subtrai o “resto” apurado pela dezena imediatamente posterior
  const verifier = toNextTen(sum(ponderation)) - rest;

  // Dígito verificador (30 – 5 -> DV = 5)
  return Array.from(String(verifier), Number)[1];

};
