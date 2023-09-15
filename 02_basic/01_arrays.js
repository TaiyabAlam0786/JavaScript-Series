// Array in javascript
const arr1=[1,3,4,5,8];
const arr12=[25,9,7,6,4];
const arr13=[5,9,6,7,8,5];
// console.log(arr1);
// for(let i=0;i<arr1.length;i++){
//     console.log(arr1[i]);
// }

// merge array
// arr1.push(arr12);
//  console.log(arr1);//[ 1, 3, 4, 5, 8, [ 25, 9, 7, 6, 4 ] ]
const newArray=arr1.concat(arr12);
console.log(newArray); /* [
    1, 3, 4, 5, 8,
   25, 9, 7, 6, 4
 ]*/

//  using spread operator
const newAllArrays=[...arr1,...arr12,...arr13]
console.log(newAllArrays); /** [
    1, 3, 4, 5, 8, 25,
    9, 7, 6, 4, 5,  9,
    6, 7, 8, 5
  ] */

  console.log(Array.isArray("Taiyab"));//false
// convert to array  
  console.log(Array.from("Taiyab")); // [ 'T', 'a', 'i', 'y', 'a', 'b' ]

  let a=5;
  let b=6;
  let c=62;
  let d=3;
  console.log(Array.of(a,b,c,d)); //[ 5, 6, 62, 3 ]