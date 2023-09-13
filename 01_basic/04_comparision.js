// comparision in js
/* .The best practices of comparision.
.when to compare between two values the both values data types it should be same. 
*/
// this types of comparision very confusion
console.log(null>0);//false
console.log(null<0);//false
console.log(null==0);//false
console.log(null>=0);//true
let arr1=[];
let arr2=[];
console.log(arr1==arr2); //false
console.log("2"==2); //true
// === strict check, this operator to check data type and values
console.log("2"===2);//false