  // promises 
  // used whenever we make requests that will take sometime to do
  // they lead to one of two outcomes. They are either resolved, or rejected

  const getData = () => {

    return new Promise((resolve, reject) => {
        // fetch
        resolve('some data');
         reject('some error');
    })
  }

  // when the promise resolves, we pass a function that takes the data that was passed into the resolve function 
  // the second callback function only fires if the promise is rejceted
  getData().then((data) => {
      console.log(data);
  }, (err) => {
      console.log(err);
  }
  );

  // instead of tacking on another function: 
  getData().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})

// for the network request
const getThings = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
  
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                // parse JSON response
              const data = JSON.parse(request.responseText);
              resolve(data);
            } else if (request.readyState === 4) {
               reject('error getting resource');
            }
        })
      
        request.open('GET', resource);
        request.send();
      });

    }

    getThings('https://jsonplaceholder.typicode.com/todos/3').then(data => {
        console.log('promise resolved' + data);
    }).catch((err) => {
        console.log('promise rejected' + err);
    })

    //chaining promises
    // alot more logical than callback hell
    getThings('https://jsonplaceholder.typicode.com/todos/1').then(data => {
        console.log('promise 1 resolved', data);
        return getThings('https://jsonplaceholder.typicode.com/users/3');
    }).then(data => {
        console.log('promise 2 resolved', data)
        return getThings('https://jsonplaceholder.typicode.com/todos/4');
    }).then(data => {
        console.log('promise 3 resolved', data);
    })