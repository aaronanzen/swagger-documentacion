'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.reyGET = function reyGET (req, res, next) {
  Default.reyGET(req.swagger.params, res, next);
};
