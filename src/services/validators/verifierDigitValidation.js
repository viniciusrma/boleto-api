module.exports = function verifierDigitValidation(str, vd) {
  const code = str.split("").reverse();
  const summation = code.reduce((acc, current, index) => {
    let iterator = ((index + 1) % 2) + 1;
    let sum = Number(current) * iterator;
    sum = sum > 9 ? Math.trunc(sum / 10) + (sum % 10) : sum;
    return acc + sum;
  }, 0);

  return Math.ceil(summation / 10) * 10 - summation === vd;
};
