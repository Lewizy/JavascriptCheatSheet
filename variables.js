//VARIABLES

var num1 = 1;
console.log(typeof num1); //typeof "number"
var bool2 = true;
console.log(typeof bool2); //typeof "boolean"
var texto = 'text';
console.log(typeof texto);// typeof "string"
var A_copi = 5;
var copying_A_copi = A_copi; // now it has the value of A_copi
var someAdjective = "Mother effin Boddanculous";
var myStr = "Learning to code is ";
myStr += someAdjective ;

var lastNameLength = 0;
var lastNamE = "Lovelace".length;
console.log(lastNamE);

var firstNamE = "Ada";
var lastLetterOfFirstNamE = firstNamE[firstNamE.length - 1];// a

// HOISTING

hoisting = 255;
  var hoisting;
console.log(hoisting);
