

  // FOREACH METHOD

  var forEachMethodArray =[1,2,3];
  forEachMethodArray.forEach(function (element) {
    console.log(element); // 1 2 3
  });

  //PUSH METHOD

  var pushMethod = [1,2,3];
  pushMethod.push(4); //Adds element to the end of the array
  console.log(pushMethod); //PRINTS [1,2,3,4];

  //POP METHOD

  var popMethod =[1,2,3,4];
  popMethod.pop();//Removes element from the end of the array
  console.log(popMethod.pop()); //PRINTS 4 the removed item
  console.log(popMethod); // PRINTS [1,2,3];

  //SHIFT METHOD

  var shiftMethod =[1,2,3];
  shiftMethod.shift();
  console.log(shiftMethod);//Removes the first item of the array
  console.log(shiftMethod.shift());// PRINTS 1

  // UNSHIFT METHOD

  var unshiftMethod = [1,2,3];
  unshiftMethod.unshift("new element");
  //adds new element to the beginning of the array
  console.log(unshiftMethod);

  //INDEX OF METHOD

  var indexOfMethod = [1,2,3,4];
  console.log(indexOfMethod.indexOf(1));//prints 0
  //1 print 1 , 2 would be 2 ect
  indexOfMethod[indexOfMethod.indexOf(1)] = "one";
  console.log(indexOfMethod); //prints ["one", 2, 3, 4]

  //SPLICE METHOD

  var spliceMethod = [1,2,3,4,5,6,7,8,9];
  spliceMethod.splice(5);// splicing starts at 5 and deletes everything after 5
  console.log(spliceMethod);//[1, 2, 3, 4, 5]

  var spliceMethod2 = [1,2,3,4,5,6,7,8,9];
  spliceMethod2.splice(1,7);//splicing begins at 1 and takes 7 elements after the 1
  console.log(spliceMethod2);//[1, 9]

  //SLICE METHOD

  var aSlice = [0,1,2,3,4,5,6,7,8,9];
  var bSlice = aSlice.slice(3,6); //begins slicing at 3 & ends at 6
  console.log(bSlice);//prints [3, 4, 5]

  var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  var citrus = fruits.slice(1, 3);//SLICES FROM INDEX TO INDEX (FROM 1 TO 3)
  console.log(citrus);// PRINTS ["Orange","Lemon"]

  //FILTER METHOD

/* The filter method is used to iterate through an array and
 filter out elements where a given condition is not true.*/
  var filterMethod = [0,1,2,3,4,5,6,7,8,9];
  console.log(filterMethod.filter( function (value) {
    return value > 5;
  }));//prints [5, 6, 7, 8, 9]

  //MAP METHOD

  var mapMethod =  [0,1,2,3,4,5,6,7,8,9];
  console.log(mapMethod.map(function (argument) {
  return argument * 2;
  })); // prints [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
  /*The map method will iterate through every element of the array,
    creating a new array with values that have been modified by the callback function,
    and return it. Note that it does not modify the original array.*/

var array = [10,25,38,49,54];
var result = array.map(function(input){
return input *32;
});
console.log(result);

  // REVERSE METHOD

  var reverseMethod = [0,1,2,3,4,5,6,7,8,9];
  reverseMethod.reverse();
  console.log(reverseMethod);

  //CONCAT METHOD
  //concat method conbines 2 ARRAYS

  var concatString = ["concat"];
  var concatString_2 = ["me"];
  var combinedConcat = console.log(concatString.concat(concatString_2));

  var oldArray = [1,2,3];
  var concatMe = [4,5,6];

  newArray = console.log(oldArray.concat(concatMe));

  //JOIN METHOD

  var joinNum = [0,1,2,3,4,5,6,7,8,9];
  var joinString = ["join","me"]
  console.log(joinNum.join(joinString));
  //prints "0join,me1join,me2join,me3join,me4"

  var veggies = ["Celery", "Radish", "Carrot", "Potato"];
  var salad = veggies.join(" and ");
  console.log(salad); // "Celery and Radish and Carrot and Potato"

  var joinMe = ["Split","me","into","an","array"];
  var joinedString = '';
  joinedString = joinMe.join(" ");

  //REDUCE METHOD

  var reduceMethod = [1,2,3,4,5];
  (reduceMethod.reduce(function (a, b) {
    console.log(("total:" + total + " , value: " + value));
    return total + value;
  }));
/*
1ST TIME : "a = 1 , b = 2" (1+2=3)
2ND TIME : "a = 3 , b = 3" (3+3=6)
3RD TIME : "a = 6 , B = 4"
ETC...    " a = 10, B = 5"

*/

var arrayReduce = [4,5,6,7,8];
var singleVal = 0;

singleVal = arrayReduce.reduce(function(initial,end){
  return initial + end;
});

// Sort METHOD

var arraySort = [1, 12, 21, 2];
arraySort.sort(function(a, b ){
  return  b - a;
}); // sorts from largest to smallest [21,12,2,1]

//Split METHOD
//split method splits values into arrays with a given argument

var string = "Split me into an array";
var arrayForSplit = [];

arrayForSplit = console.log(string.split(" "));
//  ["Split, me, into, an, array";]

