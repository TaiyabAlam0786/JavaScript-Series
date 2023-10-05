// Fetch API in javascript

// async and await 

const user={
    userName:"Taiyab",
    userEmail:"taiyab1234Example@gmail.com",
    userPassword:"taiyab1234"
}

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users',{user});
    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}
getAllUsers();

