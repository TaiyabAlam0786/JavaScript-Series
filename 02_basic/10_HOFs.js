// High order function in js
 
// filter function in js

const num1=[1,2,3,4,5,6,8,7,9,10];
// const resNum1=num1.filter((num)=> num >5);
// console.log(resNum1);

// const resNum1=num1.filter((num)=>{
//    return num>4
// })
// console.log(resNum1);

// map function

const num2=[1,2,3,4,5,6,7,8,9,10,11,21];
const newNums=num2.map((num)=> num*10)
                   .map((num)=>num+1)
                   .filter((num)=> num>20);
 console.log(newNums);

// reduce functions
const num3=[1,2,3,4];
let initialValue=0;
const resNum3=num3.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue
},initialValue);
console.log(resNum3);

const shoppingCart=[
    {
        itemname:'Js course',
        price:999
    },
    {
        itemname:'Java course',
        price:1999
    },
    {
        itemname:'mobile course',
        price:1099
    },
    {
        itemname:'data science course',
        price:11999
    },
]

const totalPrice=shoppingCart.reduce((acc,item)=>{
    return acc + item.price

},0);
console.log(`Total price of shopping cart: ${totalPrice}`);