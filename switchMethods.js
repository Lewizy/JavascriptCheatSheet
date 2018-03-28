//SWITCH STATEMENTS

 var luckyNumber = 8;

  switch (luckyNumber) {
  case 300:
   console.log("its 300");
  break ;
  case 8:
   console.log("It is the luckyNumber");
  break;
  default:
    console.log('None of the above');
  break;
  }

function caseInSwitch(val) {
var answer = "";

 switch (val){
  case 1:
   answer = "alpha";
  break;
  case 2:
   answer = "beta";
  break;
  case 3:
   answer = "gamma";
  break;
  case 4:
   answer = "delta";
  break;
   default:
    answer = "None of the above";
 }
  return answer;
}
console.log(caseInSwitch(4));

//

function sequentialSizes(val) {
  var answer = "";

  switch (val){
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;

  }
  return answer;
}
sequentialSizes(1);

 //

function chainToSwitch(val) {
  var answer = "";

  switch (val){
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
  break;
  }
  return answer;
}
chainToSwitch(7);


