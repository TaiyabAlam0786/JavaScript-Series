// Objects in js
// The object store values key pair format
// Object store the different types of values
// Singleton
// Object literals
// define a symbol and use within the object
const mysymbol=Symbol("key1");
const user1={
    name:"Taiyab",
    age:20,
    [mysymbol]:"mykey1",
    location:"Araria",
    email:"taiyab141@gmail.com",
    isLoggedIn:false,
    greeting:function(){
        console.log("Hello,Taiyab");
    }
}
// object value change
user1.age=21
// object value not changable
// Object.freeze(user1);
user1.age=22;

console.log(user1[mysymbol]);
console.log(user1.name);
console.log(user1["name"]);
// console.log(user1);
console.log(user1.greeting());
user1.greeting2=function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(user1.greeting2());
