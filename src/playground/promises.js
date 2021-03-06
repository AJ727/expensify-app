const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'aj',
            age: 23
        });
        reject('it went wrong!');
    }, 4500)
});

console.log('before');

// data is the argument in resolve above resolve(this stuff here)
// Promise chaining
promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('my other promise');
        }, 4500)
    });
}).then((str) => {
    console.log(str);
}).catch((error) => {
    console.log(error, 'error')
});

console.log('after');
