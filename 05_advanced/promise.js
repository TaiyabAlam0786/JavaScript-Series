// Promise in js
const promise = new Promise((resolve, reject) => {
    // The perform async task
    setTimeout(() => {
        console.log('Async task is completed');
        resolve()
    }, 1000);


});
promise.then((resolve) => {
    console.log(' Promise is fulfilled');
}).catch((reject) => {
    console.log(reject);

})

new Promise((resolve, reject) => {
    setTimeout(function () {
        console.log('Async task 2 is completed');
        resolve();
    }, 2000);

}).then(function () {
    console.log('Async task 2 is fulfuilled');
});

const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 3 is completed');
        resolve({ user: "Taiyab Alam", email: "taiyab1253exapmle@gmail.com", password: "12452dsdty" });
    }, 3000)
});
promise3.then(function (user) {
    console.log(user);
});

const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ user: "Taiyab Alam", email: "taiyab1253exapmle@gmail.com", password: "12452dsdty" });
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 4000)
});
promise4.then((user) => {
    return user.email;
}).then((users) => {
    console.log(`user Email: ${users}`);
}).catch((error) => {
    console.log(error);
});

const promise5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ name: "Taiyab", location: "Bihar" });
        }
        else {
            reject('ERROR:Something went wrong');
        }

    }, 5000)
});

async function consumePromise5() {
    try {
        const response = await promise5;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromise5();

// API call
console.log('API Call');
const requestUrl = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
fetch(requestUrl).then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('The promise resolve or reject');

});
