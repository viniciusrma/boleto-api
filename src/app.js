const express = require("express");

class BoletoController {
  constructor() {
    this.express = express();
    this.routes();
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new BoletoController().express;
