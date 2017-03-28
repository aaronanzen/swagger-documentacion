'use strict';

exports.personsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * pageSize (Integer)
  * pageNumber (Integer)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "firstName" : "wewewe",
  "lastName" : "wewewe",
  "username" : "wewewe"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

