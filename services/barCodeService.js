/*

[ ] Aceitar apenas números
[ ] 


*/

module.exports = {
  validBarCode: function (str) {
    return !isNaN(parseFloat(str) && isFinite(str));
  },
  stringLengthCheck: function (str) {
    var minlength = 44;
    var maxlength = 45;

    if (str.length < minlength || str.length > maxlength) {
      return false;
    } else {
      return true;
    }
  },
};
