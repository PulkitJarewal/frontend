let adj = {
    crazy: "1",
    amazing: "2",
    fire: "3"
}
let a1 = {
    engine: "1",
    food: "2",
    garment: "3"
}
let a2 = {
    bros: "1",
    limited: "2",
    hub: "3"
}
const rp = obj => Object.keys(obj)[(Math.random() * Object.keys(obj).length) | 0];

console.log(rp(adj),rp(a1),rp(a2));


let rand = Math.random()
let f,s,t 
if(rand<0.33){f="crazy"}
else if(rand>0.33 && rand<0.66){f="amazing"}
else {f = "fire"}

let rand2 = Math.random()
if(rand2<0.33){s="engine"}
else if(rand2>0.33 && rand2<0.66){s="food"}
else {s = "garment"}

let rand3 = Math.random()
if(rand3<0.33){t="bros"}
else if(rand3>0.33 && rand3<0.66){t="limited"}
else {t = "hub"}

console.log(`${f} ${s} ${t}`)