const router = require('express').Router();
const boleto = require('./controller/boletoController')

router.get('/boleto/:code', boleto.barCode);

module.exports = router;