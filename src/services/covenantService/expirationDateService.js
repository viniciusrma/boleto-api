module.exports = function getDate(barCode) {
  const newDate = new Date();
  const currentYear = newDate.getFullYear();

  const year = Number(barCode.substring(27, 31));
  if (year > currentYear + 1) return false;

  const month = barCode.substring(31, 33);
  const day = barCode.substring(33, 35);

  return `${year.toString()}-${month.toString()}-${day.toString()}`;
};
