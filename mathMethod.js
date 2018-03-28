// THE MATH BUILT IN METHODS

var pi = Math.PI;
console.log(pi);

var e = Math.E;
console.log(e);

e = Math.E;
console.log(Math.log(e));

var absoluteMath = -103;
console.log(Math.abs(absoluteMath));//103

var roundMath = 12.3;
console.log(Math.round(roundMath));// 12 ROUNDS DOWN TO MIN INTEGER

var ceilMath = 12.3;
console.log(Math.ceil(ceilMath));//13 ROUNDS UP TO MAX INTEGER

var floorMath = 12.3;
console.log(Math.floor(floorMath));//12 ROUNDS DOWN TO MINIMUM INTEGER

var expenentialMath = 12.3;
console.log(Math.exp(expenentialMath));//219695.9886721379

console.log(Math.max(1,100,1000));// 1000
console.log(Math.min(1,100,1000));//1

console.log(Math.random());
console.log(Math.random()* 200);
var randomMath = Math.random() * 100; // between 0 && 100
console.log(randomMath);

var randomMath2 = Math.floor(Math.random() * 100) + 1; // between 1 && 100 floor
console.log(randomMath2);
var randomMath3 = Math.round(Math.random() * 100) + 1; // between 1 && 100 round
console.log(randomMath3);
var randomMath4 = Math.ceil(Math.random() * 100) + 1; // between 1 && 100 ceil
console.log(randomMath4);
//etc.....
