'use strict';

var url = require('url');


var MinioAAA = require('./MinioAAAService');


module.exports.minioGET = function minioGET (req, res, next) {
  MinioAAA.minioGET(req.swagger.params, res, next);
};
