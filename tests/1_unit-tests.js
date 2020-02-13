/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = '32.1L';
      assert.equal(convertHandler.getNum(input), 32.1);
      done();
    });
    
    test('Fractional Input', function(done) {
      var input = '32/4L';
      assert.equal(convertHandler.getNum(input), 8);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '32.4/4L';
      assert.equal(convertHandler.getNum(input), 8.1);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = '32.4/2/4L';
      assert.notEqual(convertHandler.getNum(input), 2.025);
      done();
    });
    
    test('No Numerical Input', function(done) {
      var input = 'L';
      assert.equal(convertHandler.getNum(input), 1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit( ele ), ele.toLowerCase());
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      var input = 'g';
      assert.equal(convertHandler.getUnit( input ), null);
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input  = ['gal', 'l'  , 'mi', 'km', 'lbs', 'kg' ];
      var expect = ['l'  , 'gal', 'km', 'mi', 'kg' , 'lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      //see above example for hint
      var input  = ['gal', 'l', 'mi', 'km', 'lbs', 'kg' ];
      var expect = ['gallons', 'liters', 'miles', 'kilometres', 'pounds', 'kilograms'];
      input.forEach(function(ele, i) {
        assert.strictEqual(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var input = [6, 'l'];
      var expected = 1.5850;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Mi to Km', function(done) {
      var input = [80, 'mi'];
      var expected = 128.7472;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Km to Mi', function(done) {
      var input = [100, 'km'];
      var expected = 62.137;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Lbs to Kg', function(done) {
      var input = [540, 'lbs'];
      var expected = 244.9386;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = [75, 'kg'];
      var expected = 165.3465;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
  });

});