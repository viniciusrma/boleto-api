module.exports = function getDate(barCode) {
  const days = parseInt(
    barCode.substring(barCode.length - 14, barCode.length - 10)
  );
  let expirationDate = new Date("1998-01-01");
  expirationDate.setDate(expirationDate.getDate() + days);

  const day = expirationDate.getDate();
  const month = Number(expirationDate.getMonth()) + 1;
  const year = expirationDate.getFullYear();

  return month < 10
    ? `${year.toString()}-0${String(month)}-${day.toString()}`
    : `${year.toString()}-${String(month)}-${day.toString()}`;
};
