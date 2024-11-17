let nr_1 = 19;
let nr_2 = 3;
let result1 = nr_1 % nr_2;
console.log( `${nr_1} % ${nr_2} = ${result1}` );

let nr_3 = 8;
let nr_4 = 2;
let result2 = nr_3 % nr_4;
console.log( `${nr_3} % ${nr_4} = ${result2}` );

let nr_5 = 10;
let nr_6 = 2;
let result3 = nr_5 % nr_6;
console.log( `${nr_5} % ${nr_6} = ${result3}` );

let nu_r = 14;
nu_r++;
console.log( nu_r );

let nu_b = 7;
nu_b--;
console.log( nu_b );

let nr = 2;
console.log( nr++ );
console.log( nr );
// console.log(++nr);

let nr1 = 4;
let nr2 = 4;
let nr3 = 3;

console.log( nr1++ + ++nr2 * nr3++ );
console.log( nr1, nr2, nr3 );
console.log( typeof ( 5 ) );

let under;
console.log( under );
let terribleThingToDo = undefined;
console.log( terribleThingToDo );
let age = 34;
console.log( age );
let firstName = "Alex";
let sum = 34;
console.log( firstName, sum );
let language = "Javscript";
let message = `Let's learn ${language}`;
console.log( message );
// !string
let str = "Hello, what's your name? iis it \"Mike\"?";
console.log( str );
let str2 = 'Hello,what\'s your name? is "Mike"?';
console.log( str2 );

// !Type of Number

let intNr = 2;
let decNr = 1.5;
let expNr = 1.4e15;
let octNr = 0o10;
let hexNr = 0x3E8;
let binNr = 0b101;
console.log( "Number", intNr, '\n', "Decimal", decNr, '\n', "Exponitial", expNr, '\n', "Octal", octNr, '\n', "Hexadecimal", hexNr, '\n', "binary numbers", binNr );
// !bigInt

let bigNr = 90071992547409920n;
console.log( bigNr );

// !boolean

let simpleNum1 = 5;
let simpleNum2 = 6;
console.log( simpleNum1 > simpleNum2 );

//! symbol
let st1 = "Javascript is fun!";
let st2 = "Javascript is fun!";
console.log( "this two strings are same:", st1 === st2 );

let sym1 = Symbol( "Javascript is fun!" );
let sym2 = Symbol( "Javascript is fun!" );
console.log( "This two Symbols are the same:", sym1 === sym2 );

let str_1 = 'laurence';
let str_2 = "Sevink";
let val1 = undefined;
let val2 = null;
let myNum = 1000;
console.log( str_1 );
console.log( str_2 );
console.log( val1 );
console.log( val2 );
console.log( myNum );
let nbr1 = 5;
let nbr2 = "7";
console.log( nbr1 * Number( nbr2 ) );








