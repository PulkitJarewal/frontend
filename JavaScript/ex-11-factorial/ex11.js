let num = 5
// let fact = 1
// for(i = num; i >= 1; i--){
//     fact = fact*i; 
// }

// alert(fact)

function a(n) {
    let arr = Array.from(Array(n+1).keys())// for loop in short
    let c = arr.slice(1,).reduce((a,b) => {//slice 1 se 5 and reduce 1*2 then 2*3 then 6*4 then 24*5=120 
        return a*b      
    })
    return c
    
}

a(num)

