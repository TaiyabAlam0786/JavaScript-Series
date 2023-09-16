// Functions in js
// Function is a block of code that perform a particular task.
// It is provide code reusability

// function defination
function user(){
    console.log("Taiyab");
} 
// function call
user();

function add(num1,num2){
    // console.log(num1+num2);
    // const sum=num1+num2;
    // return sum; 
    return num1+num2;
}
const result=add(5,6);
console.log(`Sum of two number result: ${result}`);
// function Rest Parameters
function calculateCartPrice(...num){
    let totalPrice=0;
    for(const nums of num){
        totalPrice +=nums;
    }
    return totalPrice;
} 
const totalPrice=calculateCartPrice(200,566);
console.log(`Total price of cart: ${totalPrice}`);