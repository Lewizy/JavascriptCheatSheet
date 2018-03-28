//TIMERS

setTimeout(function () {
  console.log("This will appear after 2 seconds");
}, 2000);

setInterval(function () {
  console.log('this will apper every half of a second');
}, 500);

 //
var intervalMETHOD = setInterval(function () {
  console.log('Interval with a stop');
}, 500);
setTimeout(function () {
  clearInterval(intervalMETHOD);
}, 4500);
 //
//You can also do it like this

var intervalMETHOD_2 = setInterval(function () {
   console.log('Interval with a stop');
    setTimeout(function () {
    clearInterval(intervalMETHOD_2);
    }, 5500);
}, 50);


 var parseMETHOD = "FBB123";
 console.log(parseInt(parseMETHOD, 16 ));//16494883

 var parseMETHOD = "5";
 console.log(parseInt(parseMETHOD));// 5 (number)

 var toFixedMETHOD = 10.3;
 console.log(toFixedMETHOD.toFixed(2));//rounds it to specified as decimals
// prints 10.30

var stringFN = "Some text";
console.log(stringFN.length);//9
console.log(stringFN[0]);//S
console.log(stringFN.charAt(2));////M
console.log(stringFN.concat(' Add string or value'));//adds string to stringFN
console.log(stringFN.toUpperCase());//upper case string
console.log(stringFN.split(' '));//splits into 2 arrays
console.log(stringFN.trim()); // deletes extra spaces in string
