module.exports = function covenantBarCodeValidation(barCode) {
  const part1 = barCode.substring(0, 3);
  const part2 = barCode.substring(4, barCode.length);
  const newBarCode = part1 + part2;

  const code = newBarCode.split("").reverse();

  let factor = 2;
  const summation = code.reduce((acc, current) => {
    const sum = Number(current) * factor;
    factor = factor === 9 ? 2 : factor + 1;
    return acc + sum;
  }, 0);

  const divisionRest = summation % 11;
  let VD;

  if (divisionRest === 0 || divisionRest === 1) {
    VD = 0;
  } else if (divisionRest === 10) {
    VD = 1;
  } else {
    VD = divisionRest;
  }

  return part1 + VD.toString() + part2;
};
