  var globalScope1 = "This is a Global Scope";

  function localScopes1(){
    var globalScope1 = "This is a Local Scope";
    /* _NOTE: globalScope1 = "This is a Local Scope"] without a var key witch turns the variable into a global scope*/
    console.log(globalScope1);
  }
  localScopes1();
  console.log(globalScope1);
