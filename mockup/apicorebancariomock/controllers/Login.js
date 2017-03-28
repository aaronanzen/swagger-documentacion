'use strict';

var url = require('url');


var Login = require('./LoginService');


module.exports.consultaEstablecimientoPOST = function consultaEstablecimientoPOST (req, res, next) {
  Login.consultaEstablecimientoPOST(req.swagger.params, res, next);
};

module.exports.consultaOrdenesInternacionalesPOST = function consultaOrdenesInternacionalesPOST (req, res, next) {
  Login.consultaOrdenesInternacionalesPOST(req.swagger.params, res, next);
};

module.exports.consultaOrdenesPagoPOST = function consultaOrdenesPagoPOST (req, res, next) {
  Login.consultaOrdenesPagoPOST(req.swagger.params, res, next);
};

module.exports.cuentasATercerosPOST = function cuentasATercerosPOST (req, res, next) {
  Login.cuentasATercerosPOST(req.swagger.params, res, next);
};

module.exports.cuentasInterbancariasPOST = function cuentasInterbancariasPOST (req, res, next) {
  Login.cuentasInterbancariasPOST(req.swagger.params, res, next);
};

module.exports.cuentasPropiasPOST = function cuentasPropiasPOST (req, res, next) {
  Login.cuentasPropiasPOST(req.swagger.params, res, next);
};

module.exports.loginDinamicoPOST = function loginDinamicoPOST (req, res, next) {
  Login.loginDinamicoPOST(req.swagger.params, res, next);
};

module.exports.loginEstaticoPOST = function loginEstaticoPOST (req, res, next) {
  Login.loginEstaticoPOST(req.swagger.params, res, next);
};

module.exports.logoutPOST = function logoutPOST (req, res, next) {
  Login.logoutPOST(req.swagger.params, res, next);
};

module.exports.validacionDeLoginDinamicoPOST = function validacionDeLoginDinamicoPOST (req, res, next) {
  Login.validacionDeLoginDinamicoPOST(req.swagger.params, res, next);
};
