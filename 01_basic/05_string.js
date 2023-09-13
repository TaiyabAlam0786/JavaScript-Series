// String in javaScript
// string declaration and defination
const str1="Taiyab";
console.log(str1);
// console key value in string
console.log(str1[5]);
// find length of string
console.log(str1.length)
//Convert to upperCase
console.log(str1.toUpperCase());
// find a character
console.log(str1.charAt(4));
// find a position
console.log(str1.indexOf("b"));
// string convert to array
console.log(str1.split(' '));

str2="  Hello  "
console.log(str2);
// Remove whitespace
console.log(str2.trim());
console.log(str2.trimStart());
console.log(str2.trimEnd());

const url="https://taiyab%20alam.com";
console.log(url.replace('%20','-'));
// find url element
console.log(url.includes('alam'));
