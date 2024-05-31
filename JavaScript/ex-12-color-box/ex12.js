let b = document.getElementsByClassName("box")
console.log(b)

function getRandomColor(){
    let v1 = Math.ceil(0 + Math.random()*255)//math.ceil integer ke liye and o se lekar 255 tak
    let v2 = Math.ceil(0 + Math.random()*255)
    let v3 = Math.ceil(0 + Math.random()*255)
    return `rgb(${v1}, ${v2}, ${v3})`
}

function changeColor(){
Array.from(b).forEach(e => {
    e.style.backgroundColor = getRandomColor()
})
}

 
  
setInterval(changeColor,1000);



