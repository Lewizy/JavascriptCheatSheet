//FOR LOOPS  //NESTED LOOPS


  for (var i=0;i<5;i++){
    var names = "this is some text viewed 5 times";
    document.write(names);
  };

  for(var i=0; i<5; i++){
    for (var j=0; j<2; j++){
      console.log(i+j);
    }
  };

  for (var i=0;i<5;i++){
    if (i == 1){
      console.log("1");//prints "1"
    }
  };

  for (var i=0;i<5;i++){

    if (i == 1){
      break;
    }
    console.log(i)//prints "0"
  };

  for (var i=0;i<5;i++){

    if (i == 1){
      continue;
    }
    console.log(i)//prints 0,2,3,4
  };

  for (var i=0;i<5;i++){
    for (var j=0;j<2;j++){
      if (i == 1){
        continue; //or break;
      }
      console.log("Inside inner loop = " + j);
    }
    console.log("Outside loop = " + i);
  };

  var loopingArrayz = [1,2,3,4,5];
  for (var i=0; i<loopingArrayz.length; i++){
    console.log(loopingArrayz[i]);
};
