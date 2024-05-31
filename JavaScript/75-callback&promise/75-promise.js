console.log("this is promise")

const p1 = new Promise((resolve, reject) => {
    let no = Math.random()

    if (no < 0.5) {
        reject("this promise is rejected")
    }
    else {
        setTimeout(() => {
            console.log("this is set timeout"), resolve("resolved")
        }, 3000)
    }
})

p1.then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});