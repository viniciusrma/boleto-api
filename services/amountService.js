module.exports = 
    function amountValue(str) {
    const amount = (parseFloat(str.substr(37))/100).toFixed(2); 
    return amount;
}