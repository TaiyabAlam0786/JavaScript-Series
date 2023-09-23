// Object in js
const user={
    firstName:"Taiyab",
    lastName:"Alam",
    email:"taiyabalam@gmail.com",
    location:"Bihar"
}

for (const key in user) {
    console.log(key,':-',user[key]);
    
}

// forEach loop example
const coding=['JS','Java','React','HTML','CSS','Python','Spring','Ruby'];

coding.forEach((element)=>{
    console.log(element);
})
// Access items , index and whole arrays
coding.forEach((index,item,arr)=>{
    console.log(index, item, arr);
})

// Array and object

const user2=[
    {
      firstName:"Abhishek",
      lastName:"Raj",
      email:"abhishek@gmail.com",
      location:"Araria"  
    }
];

user2.forEach((items)=>{
    console.log(items.firstName);
});