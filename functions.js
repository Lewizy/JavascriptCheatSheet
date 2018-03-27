//FUNCTIONS

  function firstFunction() {
    console.log("This is a function with a name");
  } 
  firstFunction(); //without this callback console.log would not work

  var varFunction = function (){
    console.log("This is a variable with an assigned function ");
  }//make sure to put semicolon in this one
  varFunction();

  var assignedFunction = varFunction; // function assigned to another function
  assignedFunction();

  //RETURN KEY

  function returningValues() {
    return ("Returning this text");
  }
  var returnded = returningValues();
  console.log(returnded);

  //

  function returningValues2(){
    var stringVar = "Returning this string ";
    return stringVar;
  }
  var returned2 = returningValues2();
  console.log(returned2);

  //

  function adding (number1, number2){
    return number1 + number2;
  }
  var returnAdding = adding(11,10);
  console.log(returnAdding);

  //

function subtracting (Num1, Num2){
    return Num1 - Num2;
  }
var sub = subtracting;
console.log(sub(13,15));
var sub2 = subtracting;
console.log(sub2(10,11));
var sub3 = subtracting;
console.log(sub3(140,100));

  //

function generatoR(input) {
    var number = input;
    return function () {
      return number * 2;
    }
  };

var calc = generatoR(800);
var anotherCalc = generatoR (900);//prints 1800
console.log(calc);//without parentheses
console.log(anotherCalc());//with parentheses

///////////////////////////////////////////////////////////

(function calc(){
  var number = 10;
  console.log(number);
})();

(function calc2(input) {
  console.log("this Fn is called immidiately Invoked functions");
  console.log("this Fn is also local scope only");
  var number  = input;
  console.log(number);
})(10);

var globalScopeObject = {};
(function calc3(){
globalScopeObject.name ="Inherits from globalScopeObject";
})(globalScopeObject);

/////////////////////////////////

function argumentsGenerator(input) {
  var arg1 = arguments[0]*2 + arguments[1]*3 + arguments[2]*4;
  console.log(arg1);
};
argumentsGenerator(1,2,3);//prints 15


////////////////////////////////////////////////////////


function messages(inputMessage) {
  console.log(inputMessage);// prints whats inside the Fn
  console.log(arguments);//BUILT IN KEY
  console.log(arguments[2]);//20
  console.log(arguments.length); //4
};
var msg = messages;
console.log(msg.name);//messages
console.log(msg.length);// 1 whics is "inputMessage" argument
console.log(messages.name);// messages
messages('Hi there and hello' , 10 , 20 , 40);


//

//Another way of doing this is this
var msg1 = function (messages1) {
  console.log(messages1);
};
console.log(msg1);
