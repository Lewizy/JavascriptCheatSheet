//OPERATORS           //OPERATORS            //OPERATORS


  var addingOpertator1 = 1000;
  var addingOpertator2 =2000;
  console.log(addingOpertator1+addingOpertator2);//Prints "3000"

  var stringOperator1 = "Hello ";
  var stringOperator2 = "World";

  console.log(stringOperator1+stringOperator2);//Prints "Hello World"
  console.log(stringOperator1+addingOpertator1);//Prints "Hello 1000"
  var arrayOperator1 = [1,2,3,4,5];
  var operatorBoolean = true;
  console.log (addingOpertator2 + stringOperator2 + operatorBoolean + arrayOperator1);//Prints "2000Worldtrue1,2,3,4,5"

  var subOperator1 = 12;
  var subOperator2 = 2;
  subOperator1 -= subOperator2
  //subOperator1--
  console.log(subOperator1);// Prints 10

  var dividingOps1 = 3.2;
  var dividingOps2 = 2.2;
  console.log((dividingOps1/dividingOps2).toFixed(2)); // [toFixed] key rounds with (2) decimal places

  console.log(1 == 1); //true
  console.log(1 === 1); //true
  console.log(1 === "1"); //false
  console.log(1 == "1"); //true
  console.log(1 == 1); //true
  console.log(1 != 2); //true 1 does not = 2
  console.log(1 !== "2"); //true the value and type arent equals
  console.log(1 >= 1); //true
  console.log(1 >= "1"); //true
  console.log(NaN == NaN); //false
  console.log(NaN != NaN); //true [not equals]
  console.log(0 == null); //false
  console.log(null == undefined); //true
  console.log(0 == undefined); //false

  if (1 == 1 && 2 == 2){ // && means and
    console.log("true")
  } else {
    console.log("false")
  };                     //true [1 equals 1 "and" 2 equals 2]

  if (1 == 1 || 2 == 256546){ //     || means OR
    console.log("true")
  } else {
    console.log("false")
  }; //true

  console.log(1 == 1) || (2 == 256546); //true
  console.log(1 !== 2);// false [1 "does not equal" 2]

  //Inverted value
  var invertingValues = true;
  console.log( !invertingValues );//Prints false

  //shortcut to IF STATEMENTS
  var shortcutIfStatement = 5;
  var shortcutIfStatement2 = 5;
  console.log(shortcutIfStatement == shortcutIfStatement2 ? "Equal" : "Not equal" );
//if = "?" esle = ":"
