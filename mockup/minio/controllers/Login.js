'use strict';

var url = require('url');


var Login = require('./LoginService');


module.exports.loginDinamicoPOST = function loginDinamicoPOST (req, res, next) {
  Login.loginDinamicoPOST(req.swagger.params, res, next);
};

module.exports.loginEstaticoPOST = function loginEstaticoPOST (req, res, next) {
  Login.loginEstaticoPOST(req.swagger.params, res, next);
};

module.exports.loginExitosoConsultaEstablecimientoPOST = function loginExitosoConsultaEstablecimientoPOST (req, res, next) {
  Login.loginExitosoConsultaEstablecimientoPOST(req.swagger.params, res, next);
};

module.exports.loginExitosoConsultaOrdenesInternacionalesPOST = function loginExitosoConsultaOrdenesInternacionalesPOST (req, res, next) {
  Login.loginExitosoConsultaOrdenesInternacionalesPOST(req.swagger.params, res, next);
};

module.exports.loginExitosoConsultaOrdenesPagoPOST = function loginExitosoConsultaOrdenesPagoPOST (req, res, next) {
  Login.loginExitosoConsultaOrdenesPagoPOST(req.swagger.params, res, next);
};

module.exports.loginExitosoCuentasATercerosPOST = function loginExitosoCuentasATercerosPOST (req, res, next) {
  Login.loginExitosoCuentasATercerosPOST(req.swagger.params, res, next);
};

module.exports.loginExitosoCuentasInterbancariasPOST = function loginExitosoCuentasInterbancariasPOST (req, res, next) {
  Login.loginExitosoCuentasInterbancariasPOST(req.swagger.params, res, next);
};

module.exports.loginExitosoCuentasPropiasPOST = function loginExitosoCuentasPropiasPOST (req, res, next) {
  Login.loginExitosoCuentasPropiasPOST(req.swagger.params, res, next);
};

module.exports.logoutPOST = function logoutPOST (req, res, next) {
  Login.logoutPOST(req.swagger.params, res, next);
};

module.exports.validacinDeLoginDinmicoPOST = function validacinDeLoginDinmicoPOST (req, res, next) {
  Login.validacinDeLoginDinmicoPOST(req.swagger.params, res, next);
};
