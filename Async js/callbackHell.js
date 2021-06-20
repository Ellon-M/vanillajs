// Order flow problems when performing callback functions one after another
// using callbacks makes the program difficult to write and maintain. It also becomes difficult to identify order flow

// this is common when making requests to different apis
// first request has to be done before makibg an

// first argument before callback
const getThings = (resource, callback) => {
    const request = new XMLHttpRequest();
  
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
           callback(undefined, request.responseText);
        } else if (request.readyState === 4) {
           callback('Could not fetch data', undefined);
        }
    })
  
    request.open('GET', resource);
    request.send();
  }
  

  // nested callbacks
  // this is what callback hell is
  // this sort of methodology can be performed using promises instead 
  getThings('https://jsonplaceholder.typicode.com/users/4', (err, data) => {
      console.log(data);
      getThings('https://jsonplaceholder.typicode.com/todos/3', (err, data) => {
          console.log(data);
          getThings('https://jsonplaceholder.typicode.com/photos/700', (err, data) => {
              console.log(data);
          })
      });
  })