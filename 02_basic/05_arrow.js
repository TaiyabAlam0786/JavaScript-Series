// Defination of arrow functions
// const show=()=>{
//     let userName="Taiyab";
//     console.log(this.userName);
// };
// show();

const add=(num1,num2)=>{
    return num1+num2;
} 
console.log(add(2,9));

const addTwo=(num1,num2)=>(num1+num2);
console.log(addTwo(2,9));

// object return
// const user=()=>({userName:"Taiyab"});
// console.log(user());
