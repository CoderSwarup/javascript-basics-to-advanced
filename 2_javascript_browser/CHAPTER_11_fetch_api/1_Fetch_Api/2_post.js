console.log("post request")
/*

const opt = {
  method: 'POST',
  
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  },
  
  
  body: JSON.stringify({
    title : "sammy",
    body : "Bhai",
    Userid : 3001,
  })
}

fetch('https://jsonplaceholder.typicode.com/posts?userId=1' ,opt)
  .then((response) => response.json())
  .then((json) => console.log(json));
  
  */
  
  /*
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PATCH',
      body: JSON.stringify({
        title: 'foo',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
*/


console.log("Post using Async Await")



let create = async (todo) => {
  const opt = {
  method: 'POST',
  
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  },
  
  body: JSON.stringify(todo)
}

let p = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1' , opt)

let reasponse = await p.json()
return reasponse
}



let c = async () => {
  let todo =     {
    title : "sammy3",
    body : "Bhai3",
    Userid : 3001,
  }
  let ctodo = create(todo)
  console.log(ctodo)
}


c()
