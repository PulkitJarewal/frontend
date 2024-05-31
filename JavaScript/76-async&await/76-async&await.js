async function prom(){
    return new Promise((resolve, reject) => {
        setTimeout (() => {
          resolve("resolved")
        },3500);
        
    })
}

async function main(){
    console.log("func 1")
    console.log("func 2")

    let promise_data =await prom()
    console.log(promise_data)

    console.log("func 3")
    console.log("func 4")
}
main()