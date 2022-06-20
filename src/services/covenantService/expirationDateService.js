module.exports = function getDate(str) {
  const newDate = new Date();
  const currentYear = newDate.getFullYear();

  const year = Number(str.substring(27, 31));
  if (year > currentYear + 1) return false;

  const month = str.substring(31, 33);
  const day = str.substring(33, 35);

  return `${year.toString()}-${month.toString()}-${day.toString()}`;
};
