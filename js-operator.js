// Arithmetic operator
// + - * / % -- ++ 

// modulas 
var a = 11;
var b = 6;

console.log('modulas :>> ', a % b); //expected output 5


//Increment Operator (++)
// PreIncrement(++a) and Post Increment (a++)

//console.log('PreIncrement  :>> ', ++a); //expected output 12 assigned new value before console
console.log('PostIncrement :>> ', a++); // a = a + b
console.log('a :>> ', a);

// Decrement Operator 

console.log('PreDrecement :>> ', --b); //expected output 5
console.log('PostDrecement :>> ', b--);
console.log('b :>> ', b);


// Assignment Operator

var x = 10;
var y = 20;

// x= x + y
//x += y
console.log('x :>> ', x);

x -= y
console.log('y :>> ', x);

//Comparism Operator

var p = 10;
var z = 20;

console.log('compare :>> ', p == z ); //expected output false
console.log('compare :>> ', p != z ); //expected output true

console.log('compare :>> ', p > z ); //expected output false
console.log('compare :>> ', p < z ); //expected output true

console.log('compare :>> ', p >= z ); //expected output false
console.log('compare :>> ', p <= z ); //expected output true


var s = '50'
var sh = 50

console.log('compare type and value :>> ', s == sh); //true check value
console.log('compare type and value :>> ', s === sh); //false check value and type

console.log('compare type and value :>> ', s !== sh); //true check value and type