// Numbers and maths in js
const score=1200;
console.log(score);
const num=new Number(100);
console.log(num);
const nums=1000000;
console.log(nums.toLocaleString('en-IN'));

// ****** maths *******
console.log(Math);
// convert absolute value
console.log(Math.abs(-10));
// Roundof values
// this is a convert to nearst integer values
console.log(Math.round(5.4));
// find a minimum value
console.log(Math.min(4,6,4,2,1));
// Find a maximum value
console.log(Math.max(45,8,9,162));

// random
const min=12;
const max=25;
console.log(Math.floor(Math.random() * (max-min + 1)) + min);