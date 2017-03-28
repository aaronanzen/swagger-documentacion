'use strict';

exports.consultaEstablecimientoPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * primer login (Consulta-de-establecimiento-in)
  **/
    var examples = {};
  examples['application/json'] = {
  "identificador-mas-cuentas" : "qwerty123",
  "nombre-cuenta" : "nomina",
  "fecha-ultimo-pago" : "12/12/12",
  "correo-electronico" : "anzen@anzen.com",
  "alias-cuenta" : "nom23",
  "RFC" : "123123wsfdsdrew34r",
  "numero-de-cuentas" : "123123123213",
  "Identificador más cuentas" : "12321eqwe",
  "monto-ultimo-pago" : "12,999",
  "Monto Máximo" : "120,000",
  "Banco" : "banamex",
  "estatus" : false,
  "moneda" : "null",
  "tipo-cuenta" : "terceros",
  "telefono" : "44-44-44-44",
  "Cuenta" : "1236543",
  "Periodicidad" : 1
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.consultaOrdenesInternacionalesPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * primer login (Consulta-de-ordenes-internacionales-in)
  **/
    var examples = {};
  examples['application/json'] = {
  "tipo de persona" : 1,
  "fecha-ultimo-pago" : "12/12/12",
  "beneficiarios" : "tres",
  "correo-electronico" : "wined@anzen.com.mx",
  "alias-cuenta" : "winedterceros",
  "RFC" : "eage123456hrmc140",
  "Identificador más cuentas" : "12we324er",
  "monto-ultimo-pago" : "120,000",
  "Monto Máximo" : "200,000",
  "estatus" : true,
  "moneda" : "null",
  "tipo-cuenta" : "cuentas a terceros",
  "Swift" : "qwe123123",
  "telefono" : "45-45-45-45",
  "Periodicidad" : "12we1234"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.consultaOrdenesPagoPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * primer login (CuentasDeOrdenesDePago-in)
  **/
    var examples = {};
  examples['application/json'] = {
  "Numero-de-cuenta" : "12312312sdf",
  "fecha-ultimo-pago" : "null",
  "correo-electronico" : "23@multiva.com",
  "alias-cuenta" : "multiva",
  "RFC" : "eahei89ejfd",
  "tipo persona" : "fisica",
  "monto-ultimo-pago" : 12000.0,
  "nombre-de-cuenta" : "null",
  "Monto Máximo" : 10000.0,
  "estatus" : false,
  "sucursal" : "12",
  "cuenta" : "213wqeqwe",
  "moneda" : "pesos",
  "tipo-cuenta" : "qwe123",
  "telefono" : 2.3232323E7,
  "identificador mas cuentas" : "true",
  "Periodicidad" : 1
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.cuentasATercerosPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * primer login (Consulta-de-cuentas-terceros-in)
  **/
    var examples = {};
  examples['application/json'] = {
  "Numero-de-cuenta" : 123234234,
  "fecha-ultimo-pago" : "null",
  "correo-electronico" : "anzen@anzen.com.mx",
  "alias-cuenta" : "nomwined",
  "Identificador más cuentas" : "123qweqweqew",
  "monto-ultimo-pago" : "12/12/12",
  "nombre-de-cuenta" : "nomina",
  "Tipo de persona" : "fisica",
  "Monto Máximo" : "120,000",
  "estatus" : true,
  "sucursal" : 12,
  "cuenta" : "null",
  "moneda" : "pesos",
  "tipo-cuenta" : "terceros",
  "telefono" : "34-34-34-34",
  "Periodicidad" : 1
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.cuentasInterbancariasPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * primer login (Consulta-de-cuentas-interbancarias-in)
  **/
    var examples = {};
  examples['application/json'] = {
  "Numero-de-cuenta" : 1.23123123213E11,
  "identificador-mas-cuentas" : "12233445erer",
  "fecha-ultimo-pago" : "12/12/12",
  "correo-electronico" : "multiva@example.com.mx",
  "alias-cuenta" : "prowined",
  "RFC" : "eagw123456jfmd178",
  "Identificador más cuentas" : "12qwerty",
  "monto-ultimo-pago" : "120,000",
  "nombre-de-cuenta" : "propia",
  "Monto Máximo" : "120,000",
  "estatus" : true,
  "sucursal" : 1,
  "cuenta" : "multiva1234",
  "moneda" : "null",
  "tipo-cuenta" : "3ros",
  "telefono" : "55-23-23-23-",
  "Periodicidad" : 123
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.cuentasPropiasPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * primer login (Consulta-de-cuentas-propias-in)
  **/
    var examples = {};
  examples['application/json'] = {
  "monto-ultimo-pago" : 10000.0,
  "Numero-de-cuenta" : "1",
  "nombre-de-cuenta" : "multiva",
  "identificador-mas-cuentas" : "false",
  "estatus" : false,
  "fecha-ultimo-pago" : "12/12/12",
  "sucrusal" : "insurgentes sur",
  "cuenta" : 1,
  "moneda" : "Pesos",
  "tipo-cuenta" : "Cuenta a terceros",
  "alias-cuenta" : "multiva12345"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.loginDinamicoPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * primer login (Login-dinamico-in)
  **/
    var examples = {};
  examples['application/json'] = {
  "valor-de-comparacion" : true
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.loginEstaticoPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * primer login (LoginEstatico-in)
  **/
    var examples = {};
  examples['application/json'] = {
  "Hora-login-previo" : "720",
  "Razon-Social" : "Multiva",
  "Fecha-de-Vigencia-de-Clave" : "12/12/12",
  "Servicios-contratados" : "3",
  "Fecha-Login-previo" : "12/12/12",
  "identificador-de-sesion" : "werwer12321",
  "hora-de-login" : "780",
  "fecha-login" : "12/12/12"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.logoutPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * primer login (LoginExitoso-in)
  **/
    var examples = {};
  examples['application/json'] = {
  "respuest" : false
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.validacionDeLoginDinamicoPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * valor dinamico (Valida-login-dinamico-in)
  **/
    var examples = {};
  examples['application/json'] = {
  "respuest" : true
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

