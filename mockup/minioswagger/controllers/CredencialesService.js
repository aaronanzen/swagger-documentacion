'use strict';

exports.credencialesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "secretket" : "zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG",
  "accesskey" : "Q3AM3UQ867SPQQA43P2F",
  "url" : "https://play.minio.io:9000"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

