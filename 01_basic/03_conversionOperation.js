let values="20abcd";
console.log(typeof values);
let valueInNumber=Number(values)
console.log(typeof valueInNumber);
console.log(valueInNumber);
// boolean value 1 is convert to true
let boolean=1;
let booleanIsLoggedIn=Boolean(boolean);
console.log(booleanIsLoggedIn);
// number convert to string
let number=55;
let stringNum=String(number);
console.log(stringNum);
console.log(typeof stringNum);

// ***** Operations *****
let value=3;
let negValue=-value;
console.log(negValue);
// Arithmetical operations
/*
console.log(5+5);
console.log(5-5);
console.log(5*5);
console.log(5/5);
console.log(5**3);
console.log(5%5);
*/
// string concatenation
let str1="Hello";
let str2=" Taiyab";
// normal concatenate
let str3=str1+str2;
console.log(str3)
// concate using method but same output
str3=str1.concat(str2);
console.log(str3)
// increment operator
let x=3;
let y=x++;
console.log(`x:${x}, y:${y}`);
// output:"x:4, y:3"
let a=3;
let b=++a;
console.log(`a:${a}, b:${b} `)
// output:"a:4, b:4"