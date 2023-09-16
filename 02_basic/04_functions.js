// Function in js
// use rest operator
function calculateCartPrice(val1,val2, ...num){
    let totalPrice=0;
    let sum=val1+val2;
    for(nums of num){
        totalPrice=totalPrice+nums;
    }
    totalPrice+=sum;
    return totalPrice;
}
const results=calculateCartPrice(5,6,20,50,60);
console.log(`Total cart price: ${results}`);

// function and objects
const user={
    userName:"Taiyab",
    age:20
}
// function handleObject1(anyObj){
//     return anyObj;
// }
// const result=handleObject1(user)
// console.log(result);
function handleObject2(anyObj){
    console.log(`UserName: ${anyObj.userName} and age:${anyObj.age}`);
}
handleObject2(user)

// Function in array
const arr=[20,6,20,65,45];
function handleArray(getArray){
    return getArray[0];
}
const res=handleArray(arr)
console.log(res);