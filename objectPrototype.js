
// PROTOTYPE OBJECTS

//VARIABLE ORIENTED OBJECTS

//*Fields and Methods
// Fields are variables inside of objects AKA properties
//Methods are functions inside of variables
var objectProperties = {
    name:'Lewis',
    lastName:'Betances',
    "third-name": 'Cuchillo',
    age:30,
    relegion: 'Cristianity',
    children:["Isaiah","Jeremiah","Samuel"],
    address:{
        street: '5th Main Street',
        city:'Compton',
        country:'Godville'
      },
      greet: function(){
        console.log("Hello World, my last name is " + this.lastName);
        console.log("My last name is " + this.lastName);
      },
      email: function () {
        return 'lewisbetances@gmail.com';
      },
 };
console.log(objectProperties.name); //Accessing properties
console.log(objectProperties['name']);
console.log(objectProperties['third-name']);
var beliefs = 'relegion';
console.log(objectProperties[beliefs]);
console.log(objectProperties.address.city);//Prints Compton
console.log(objectProperties.children[0]);//Prints Isaiah
console.log(objectProperties.email());
objectProperties.age = 31;//changes value of age
objectProperties.eyeColor = "Brown";// Adds new value
objectProperties['height'] = 5.4;
objectProperties.greet();// **dont forget to callback function**
objectProperties.children.push("Paco");
objectProperties = JSON.stringify(objectProperties);// set it to be viewd as JSON
objectProperties = JSON.parse(objectProperties);// Sets it back to javascript objects
console.log(objectProperties);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var objectPropertiesArrays = [
  {
     name:'Jhon',
     age:34
  },
  {
     name:'Kristen',
     age:22
  },
  {
     name:'Nordstram',
     age:170
  }];
  console.log(objectPropertiesArrays[0]);
  console.log(objectPropertiesArrays[2].name);
  console.log(objectPropertiesArrays[2].age);

var outputt =""; // Attenttion to the empty string
for (var i = 0; i<objectPropertiesArrays.length;i++){
    //console.log(objectPropertiesArrays[i]);
    //console.log(objectPropertiesArrays[i].name);
    outputt += '<li>' +objectPropertiesArrays[i].age+ '</li>' ;
  };
document.getElementById('objectPropertiesArrays').innerHTML = outputt;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var randomPerson = {
     name:"",
     relegion:"",
     city:"",
     car:"",
    };
    
 Object.prototype.methodNameAttributes = function ()
    {
     console.log("Hello, my name is " + this.name);
     console.log("And my Relegion is " + this.relegion);
     console.log("I was born in " + this.city);
    };
var persianPerson = Object.create(randomPerson);//<== Call back variable randomPerson
    persianPerson.name ="Galileo";
    persianPerson.relegion ="Persianity";
    persianPerson.city = "Persiville";
    persianPerson.methodNameAttributes();
    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// OBJECT PROPERTIES WITH DEFINE PROPERTY

var account = {
    accountName:'account Name',
    cash:12000,
    withdraw: function(amount){
        this.cash -= amount;
        console.log('Withdrew ' +amount+ ', new cash reserve is: '+ this.cash);
      },
  };
  account.withdraw(1000);

  Object.defineProperty(account, 'deposit', { // deposit here is not a string its the name of the PROPERTY
    value: function(amount){
      this.cash += amount;
    }});
  account.deposit(3000);
  account.withdraw(1000);

  Object.defineProperty(account, 'id' , {
    value:'ID000-1', //read only
    writable: true, //overrides read only
  });
  console.log(account.id);

  Object.defineProperty(account, 'name', {
    get: function () {
      return this.accountName;
    },
    set: function (name) {
      this.accountName = name;
    },
  });
  console.log(account.name);
  for (var fields in account){
    console.log(fields);
    console.log(account[fields]);
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    

var car = {
     type:"Cadillac",
     color:"Red",
     miles:143021,
     cost:'$21,000',
     advertisement: function(){
      console.log("This car is a "+this.type+" and it costs "+this.cost);
     }
    }
    car.advertisement();
    
var bike = new Object();
    bike.type = 'Kawasaki';
    bike.color = "Magento";
    bike.ad = function(){
     console.log("this is a " + bike.type+ " bike, its color is "+bike.color)
    }
    bike.ad();

////////////////////////////////////////////////////////////////////////////////////////////
    
var iphone6s = {
     brand:"Apple",
     model:'iphone6s',
     color:"black",
     condition:"used"
    }

 var iphoneX = Object.create(iphone6s);
    iphoneX.model = "iphoneX";
    iphoneX.condition; //used
    console.log("Inhereted the color from iphone6s - "+iphoneX.color);
    console.log("Inheteted the brand form iphone6s - "+iphoneX.brand);
    
    Object.prototype.appleAdverstisement = function(){
      console.log("Both iphones inherited this message "+this.model);
    }
    iphone6s.appleAdverstisement();
    iphoneX.appleAdverstisement();

  var man = {
      name:"Jhon",
      age:29,
      } 
  var woman = {
      name:"Sarah",    
      age:23,
      }
      
  Object.prototype.people = function(){
      console.log("Hello my name is "+this.name+" and my age is "+this.age);
      }
  man.people();//Hello my name is Jhon and my age is 29
  woman.people();//Hello my name is Sarah and my age is 23

  var iphone6ss = {
    brand:"Apple",
    model:'iphone6s',
    color:"black",
    condition:"used",
    appleAdverstisement : function(){
      console.log("Both iphones inherited this message "+this.model);
    } 
   }
  iphone6ss.appleAdverstisement();

//////////////////////////////////////////////////////////////////////////

function Cartoonists (name,age){
    this.name = name;
    this.age = age;
    this.franchise = "Nickelodeon";
    this.greet = function(){
      console.log("Hi I am "+this.name);
    }
  }
  
  Cartoonists.prototype.ageGreet = function(){
    console.log("My Age is " +this.age);
  }
  Cartoonists.prototype.franchise = "CartoonNetwork";
  //Notice: this franchis does not override franchise inside function
  console.log(Cartoonists.prototype.franchise);
  
  var ladiesMan = new Cartoonists("JhonyBravo", 23);
  ladiesMan.name  = "Override name";
  var powerPuff = new Cartoonists("Bubbles", 8);
  var spongeBob = new Cartoonists("Patrick-Star", 16);
  var tv = new Cartoonists(); console.log(tv.franchise);
  ladiesMan.greet();
  powerPuff.greet();
  spongeBob.greet();
  ladiesMan.ageGreet();
  powerPuff.ageGreet();
  spongeBob.ageGreet();
  
  ///////////////////////////////////////////////////////////////////////////

    //CONSTRUCTOR FUNCTION ARGUMENTS

    function hebrewPerson(name, age){
        this.name = name;
        this.age = age;
      };
    
      var Yeshua = new hebrewPerson('Yeshua', 30);
      var Petros = new hebrewPerson('Petros', 40);
      console.log(Yeshua);
      console.log(Petros);
    
     function twoProphets(name,level){
      this.name = name;
      this.level = level;
    }
    
    var prophetNum1 = new twoProphets = ('Jeremiah', 80);
    var prophetNum2 = new twoProphets = ('Isaiah', 89 );
    
    console.log("this is "+prophetNum1+ "and" +prophetNum2 );
    
/////////////////////////////////////////////////////////////////////////////////////////


  function family() {
    this.name ="Family";
    this.age ="";
    this.globalGreet = function(){
      console.log('Helloz ' + this.name)
    }
  };
  family.prototype.name  = "Fam";// does not override name of family, sets it to prototype

  family.prototype.greet = function () {
    console.log("Hello I am " + this.name + " age is " + this.age);
  };

  var child = new family();
  child.name ="Matt,";
  child.age = 12;
  child.greet();

  var child2 = new family();
  child2.name = "Paco"; // this name does override family CONSTRUCTOR beacuse its set to globalGreet
  child2.globalGreet();
  console.log(child2 instanceof family);//true
  console.log(family);
  







