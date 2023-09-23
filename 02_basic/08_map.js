// Map in js
const user =new Map();
user.set('Name',"Taiyab");
user.set('Email',"taiyabalam@gmail.com");
user.set('Password',"12354");
user.set('Location', "Bihar");
for(const [key,value] of user){
    console.log(key, ':-', value);
}