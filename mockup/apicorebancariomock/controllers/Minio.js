'use strict';

var url = require('url');


var Minio = require('./MinioService');


module.exports.minioGET = function minioGET (req, res, next) {
  Minio.minioGET(req.swagger.params, res, next);
};
