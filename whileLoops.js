//WHILE LOOPS         //WHILE LOOPS           //WHILE LOOPS

  var while_ing = 5 ;
  while (while_ing < 7){
    console.log(while_ing);
    while_ing++
  };


  var while_Condition1 = true;
  var while_Initial = 5; // is the starting point

  while (while_Condition1){
    if (while_Initial == 19){ // this is the ending point
      while_Condition1 = false; //until its false
    }
    console.log(while_Initial);
    while_Initial++;
  };

  var whileInitialCondition = false;
  do {
      console.log("Execute once with 'do' key");
    } 
while (whileInitialCondition);
