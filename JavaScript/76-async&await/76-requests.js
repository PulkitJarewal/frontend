async function postdata(){

let x = await fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify({
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});

let data = await x.json()
return data
}

async function main(){
    console.log("func 1")
    console.log("func 2")

    let promise_data =await postdata()
    console.log(promise_data)

    console.log("func 3")
    console.log("func 4")
}
main()