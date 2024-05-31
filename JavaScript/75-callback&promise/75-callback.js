const callback = (arg) => {
  console.log(arg)
}


const loads = (src, callback) => {
  let sc = document.createElement("script")
  sc.src = src
  sc.onload = callback("Pulkit")
  document.head.append(sc);
}

loads("https://patents.google.com/patent/KR20040037460A/en",callback )
