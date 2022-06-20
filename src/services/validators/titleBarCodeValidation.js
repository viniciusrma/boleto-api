module.exports = function titleBarCodeValidation(str, vd) {
  const part1 = str.substring(0, 4);
  const part2 = str.substring(5, str.length);
  const newBarCode = part1 + part2;

  const code = newBarCode.split("").reverse();

  let factor = 2;

  const summation = code.reduce((acc, current) => {
    const sum = Number(current) * factor;
    factor = factor === 9 ? 2 : factor + 1;
    return acc + sum;
  }, 0);

  const divisionRest = summation % 11;
  let VD = 11 - divisionRest;

  if (VD === 0 || VD === 10 || VD === 11) VD = 1;

  return VD === Number(vd);
};
