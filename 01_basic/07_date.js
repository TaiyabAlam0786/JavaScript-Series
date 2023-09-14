// Dates in js
let myDate=new Date();
console.log(myDate.toString()); //Thu Sep 14 2023 01:48:15 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Thu Sep 14 2023
console.log(myDate.toLocaleDateString()); //9/14/2023
/*let myCreatedDate=new Date(2023,0,14);
console.log(myCreatedDate);// 2023-01-14T00:00:00.000Z*/

let myCreatedDate=new Date("09-14-2023");
console.log(myCreatedDate.toLocaleString());

