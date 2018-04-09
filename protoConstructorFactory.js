
//FACTORY PATTERN


var peopleFactory = function (name, age, state){
    var temp = {};
    
    temp.name = name;
    temp.age = age;
    temp.state = state;
    
      temp.printPerson = function (){
        console.log(this.name+", "+this.age+", "+this.state);    
      }
    return temp;
  }
  
  var person1 = peopleFactory("Kim",24,"California");
  var person2 = peopleFactory("Leo",15,"Michigan");
  var person3 = peopleFactory("Kasey",25,"Nebraska");

  person1.printPerson();
  person2.printPerson();
  person3.printPerson();
 ///////


 //CONSTRUCTOR PATTERN

var peopleConstructor = function (name, age, state){

    this.name = name;
    this.age = age;
    this.state = state;

    this.consoleLogger = function(){
        console.log(this.name+", "+this.age+", "+this.state);
    };
};

var person4 = new peopleConstructor("Jhonny",34,"FL");
var person5 = new peopleConstructor("David",31,"NY");
var person6 = new peopleConstructor("Jhonny",34,"RI");

person4.consoleLogger();
person5.consoleLogger();
person6.consoleLogger();


//PROTOTYPE PATTERN

var peopleProto = function(){
    //emty object
}
peopleProto.prototype.name = "Default name";
peopleProto.prototype.age =0;
peopleProto.prototype.state ="Default state";

peopleProto.prototype.consoleLogger = function(){
    console.log(this.name+", "+this.age+", "+this.state);
}

var person7 =  new peopleProto();
person7.name = "Julie"; 
person7.age = 24; 
person7.state = "Illinois"
console.log('name' in person7);//true
console.log(person7.hasOwnProperty('name'));//determines if an object has a property with a specified name

//DYNAMIC PROTOTYPE PATTERN

var peopleDynamicProto = function (name, age, state){
    this.name = name;
    this.age = age;
    this.state = state;

    if (this.consoleLogger !== 'function'){
        peopleDynamicProto.prototype.printPerson = function(){
            console.log(this.name+", "+this.age+", "+this.state)
        }
    }
};

var person8 = new peopleDynamicProto("Clack",21,"Miniopolis");
person8.printPerson();
