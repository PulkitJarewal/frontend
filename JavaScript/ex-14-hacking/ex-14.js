var rand = Math.ceil(1000 + Math.random()*7000)


async function prom(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
      resolve()}, rand);
    })
    
}

async function main() {
    let data;

    data = await prom();
    document.querySelector(".bo").innerHTML += h1;

    data = await prom();
    document.querySelector(".bo").innerHTML += h2;
   

    data = await prom();
    document.querySelector(".bo").innerHTML += h3;

    data = await prom();
    document.querySelector(".bo").innerHTML += h5;

    data = await prom();
    document.querySelector(".bo").innerHTML += h6;
}

main()

let h1 = `<p>Initializing Hacking<span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span></p>`
let h2 = `<p>Reading your files<span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span></p>


`
let h3 = `<p>Password files Detected<span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span></p>`
let h5 = `<p>Sendng all passwords and personal files to server<span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span></p>`
let h6 = `<p>Cleaning up<span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span></p>`
     