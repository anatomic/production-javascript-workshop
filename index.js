fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
        // do something with the thing
        console.log(json);
    })