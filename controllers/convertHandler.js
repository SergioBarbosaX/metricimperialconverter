/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  const unitValue = {
    'gal': ['gallons'   , 'l'  , 3.78541],
    'l'  : ['liters'    , 'gal', 0.26417],
    'lbs': ['pounds'    , 'kg' , 0.45359],
    'kg' : ['kilograms' , 'lbs', 2.20462],
    'mi' : ['miles'     , 'km' , 1.60934],
    'km' : ['kilometres', 'mi' , 0.62137]
  };
  
  const calculateValue = ( input ) => {
    input = input.join( '' ).split( '/' );
    return input.length <= 2
            ? input.reduce( ( a,b ) => a / b )
            : null;
  }
  
  this.getNum = function( input ) {
    input = input.toLowerCase( ).match( /[^a-z]/gi ) || 1;
    return input !== 1 ? calculateValue( input ) : 1; 
  };
  
  this.getUnit = function( input ) {
    input = input.toLowerCase( ).match( /[a-z]/gi ).join('');
    return Object.keys(unitValue).includes( input )?input:null;
  };
  
  this.getReturnUnit = function(initUnit) {
    initUnit = initUnit.toLowerCase();
    return unitValue[initUnit][1];
  };

  this.spellOutUnit = function(unit) {
    return unitValue[unit][0];
  };
  
  this.convert = function(initNum, initUnit) {
    return unitValue[initUnit][2]*initNum;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let returnNumRounded   = Number.parseFloat(returnNum).toFixed(5);
    let spellOutInitUnit   = this.spellOutUnit(initUnit);
    let spellOutReturnUnit = this.spellOutUnit(returnUnit);
    
    return ({"initNum": initNum, "initUnit": initUnit, "returnNum": returnNum, "returnUnit": returnUnit, "string":`${initNum} ${spellOutInitUnit} converts to ${returnNumRounded} ${spellOutReturnUnit}`});
  };
  
}

module.exports = ConvertHandler;
