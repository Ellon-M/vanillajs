// fetch api

//..instead of using XMLhttpRequests
// since it is a promise, we tack on 2 functions to it - a response and a reject

fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {
    console.log('resolved', response);
    // return data as json
    return response.json();
    //promise chaining
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('rejected', err);
})
