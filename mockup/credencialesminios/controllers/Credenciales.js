'use strict';

var url = require('url');


var Credenciales = require('./CredencialesService');


module.exports.credencialesGET = function credencialesGET (req, res, next) {
  Credenciales.credencialesGET(req.swagger.params, res, next);
};
