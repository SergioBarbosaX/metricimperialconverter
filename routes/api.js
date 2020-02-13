/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input       = req.query.input;
      var initNum     = convertHandler.getNum(input);
      var initUnit    = convertHandler.getUnit(input);
      // Validates inputs or send back response with error.
      if ( !initNum && !initUnit )  return res.send( 'invalid number and unit' );
      else if ( !initNum )          return res.send( 'invalid number' );
      else if ( !initUnit )         return res.send( 'invalid unit' );
      var returnNum   = convertHandler.convert(initNum, initUnit);
      var returnUnit  = convertHandler.getReturnUnit(initUnit);
      var toString    = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      //res.json({"initNum":3.1,"initUnit":"mi","returnNum":4.98895,"returnUnit":"km","string":"3.1 miles converts to 4.98895 kilometers"});
      res.json(toString);
    
    });
    
};
