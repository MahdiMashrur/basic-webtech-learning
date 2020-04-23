console.log( Number("   123   ") ); // 123
console.log( Number("123z") );      // NaN (error reading a number at "z")
console.log( Number(true) );        //  boolean true converts to number 0
console.log( Number(false) );       // boolean false converts to 0



console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean("abcd"));
console.log(Boolean(" "));

/*
undefined	becomes NaN
null	becomes 0
true / false	becomes 1 / 0
string	=> The string is read “as is”, whitespaces from both sides are ignored. An empty string becomes 0. 
An error gives NaN.
*/
