'use strict';

var url = require('url');


var MinioAaron = require('./MinioAaronService');


module.exports.minioGET = function minioGET (req, res, next) {
  MinioAaron.minioGET(req.swagger.params, res, next);
};
