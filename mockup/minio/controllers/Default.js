'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.personsGET = function personsGET (req, res, next) {
  Default.personsGET(req.swagger.params, res, next);
};
