// callback functions

// These are functions that are passed into other functions as arguments
// They are then invoked inside the outer function to complete some action
// Each time the outer function is called, a different kind of callback function can be specified

// the outer function
// the callback function passed as an argument (do not use parentheses)
const getUsers = (callback) => {
  // object used to request data from a web server
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
          // instead of specifying a response, call the callback 
          // the first argument is undefined since there is no error (status = 200)
         callback(undefined, request.responseText);
      } else if (request.readyState === 4) {
         callback('Could not fetch data', undefined);
      }
  })

  request.open('GET', 'https://jsonplaceholder.typicode.com/users/');
  request.send();
}

console.log(1);
console.log(2);

// function call
getUsers((err, data) => {
    console.log('callback fired');
    // check for fetch error
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

console.log(3);
console.log(4);

// callback functions make code more reusable. The getUsers function can be called many times, each time we could do something different on the callback function


// the function call is asynchronous - it is non-blocking. It starts its execution - and finishes it later, regardless of the position the function is called
// the console sequence would be: 1, 2, 3, 4, callback fired, then the users data